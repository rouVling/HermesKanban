"""Hermes import helpers.

The service runs from this standalone repo but deliberately reuses the installed
Hermes Kanban DB module as the single source of truth.
"""
from __future__ import annotations

import os
import sys
from pathlib import Path


def ensure_hermes_importable() -> None:
    """Put the local Hermes checkout on sys.path when it is not installed.

    A Hermes source checkout commonly lives at ~/.hermes/hermes-agent and may
    already be injected in Hermes sessions. The start script can run outside
    that environment, so path resolution is explicit and predictable.
    """
    candidates = []
    env_root = os.environ.get("HERMES_AGENT_ROOT")
    if env_root:
        candidates.append(Path(env_root).expanduser())

    hermes_home = os.environ.get("HERMES_HOME")
    if hermes_home:
        hh = Path(hermes_home).expanduser()
        candidates.extend([
            hh / "hermes-agent",
            hh.parent / "hermes-agent",
            hh.parent.parent / ".hermes" / "hermes-agent",
        ])

    user = os.environ.get("USER")
    if user:
        candidates.append(Path("/home") / user / ".hermes" / "hermes-agent")

    candidates.extend(
        [
            Path.home() / ".hermes" / "hermes-agent",
            Path.home() / ".local" / "share" / "hermes-agent",
        ]
    )
    for candidate in candidates:
        if (candidate / "hermes_cli" / "kanban_db.py").is_file():
            s = str(candidate)
            if s not in sys.path:
                sys.path.insert(0, s)
            return


ensure_hermes_importable()

try:  # noqa: E402 - path setup above is intentional
    from hermes_cli import kanban_db  # type: ignore
except Exception as exc:  # pragma: no cover - depends on host install
    raise RuntimeError(
        "Could not import hermes_cli.kanban_db. Set HERMES_AGENT_ROOT to the "
        "Hermes Agent checkout that contains hermes_cli/kanban_db.py."
    ) from exc


def _install_compat_shims() -> None:
    """Backfill kanban_db helpers this service relies on but that newer
    Hermes checkouts have dropped.

    Hermes removed ``active_run`` in its "remove dead code" cleanup, but
    KanbanWebUI still needs "the currently-open run for a task". We restore
    it here with the exact query the old helper used (open run =
    ``ended_at IS NULL``) so behaviour is byte-for-byte identical and we
    never have to fork the upstream Hermes checkout.
    """
    if hasattr(kanban_db, "active_run"):
        return

    def active_run(conn, task_id):
        row = conn.execute(
            "SELECT * FROM task_runs WHERE task_id = ? AND ended_at IS NULL "
            "ORDER BY started_at DESC LIMIT 1",
            (task_id,),
        ).fetchone()
        return kanban_db.Run.from_row(row) if row else None

    active_run.__doc__ = (
        "Return the currently-open run for ``task_id`` (``ended_at IS NULL``)."
    )
    kanban_db.active_run = active_run  # type: ignore[attr-defined]


_install_compat_shims()
