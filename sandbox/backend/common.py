"""Sandbox Common Module

This module implement the common functionality.
"""

from functools import lru_cache
import json
from pathlib import Path


CURRENT_MODULE_PATH = Path(__file__).parent.expanduser().resolve()
ROUTE_PREFIX = 'b'
STATIC_PREFIX = f'res'


@lru_cache(maxsize=8)
def get_metadata() -> dict:
    """Get Metadata

    Get the metadata, and return the data as a dictionary.

    :returns: (dict) The metadata as a dictionary
    """

    with open(f'{CURRENT_MODULE_PATH.parent}/metadata.json', 'r', encoding='utf-8') as file:
        data = json.load(file)

    return data
