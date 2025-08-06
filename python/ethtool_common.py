#!/usr/bin/python3

import enum
import subprocess
import re

from typing import List

#{fact rule=absolute-path-usage@v1.0 defects=0}
_ETHTOOL_BIN_PATH = "/usr/sbin/ethtool"
#{/fact}

class EthtoolUnmodifiedWarnings(enum.Enum):
    SINGLE_OPTION = b"unmodified, ignoring"
    ENTIRE_CALL = b"parameters changed, aborting"


def ethtool_had_unmodified_message(output: str) -> bool:
    """
    returns true if any "unmodified" message in `output` can explain a non-zero
    exit code from ethtool.

    :arg output: stderr from an ethtool call
    """
    return any(bool(re.search(warning.value, output)) for warning in EthtoolUnmodifiedWarnings)

def ethtool_args(local_interface_name: str, top_level_argument: str, trailing_arguments: List[str] = []) -> List[str]:
    """
    generate a list of arguments (eg: suitable for passing to subprocess)
    for calling ethtool with `top_level_argument` against `interface` with
    `trailing_arguments`.

    Does not actually call ethtool.

    :arg local_interface_name: eg: eth0. Must not be blackfyre-style InterfaceA string.
    :arg top_level_argument: eg: --coalesce, --statistics
    :arg trailing_arguments: eg: ['rx' '4096' 'tx' '1024'], trailing arguments for the top_level_argument.

    :returns: list of strings, suitable for passing to subprocess.
    """
    return [_ETHTOOL_BIN_PATH, top_level_argument, local_interface_name] + trailing_arguments


def apply_ethtool_settings(arguments: List[str], strict: bool = True) -> None:
    """
    given ethtool command argument list (including ethtool binary), call with subprocess, then check

    :arg: strict: ethtool returns nonzero when applying already applied
                  settings. When strict is true, do not ignore exit status when
                  unmodified messages appear.
    """
    result = subprocess.run(arguments, check=False, capture_output=True)
    if result.returncode != 0:
        if (not ethtool_had_unmodified_message(result.stderr)) or strict:
            raise Exception(result.stderr.decode())
