"""Asset Blueprint

The asset blueprint implements the configuration for the asset package.
"""

from flask import Blueprint

from backend import common


PROJECT_PREFIX = 'asset'

# Create the `asset` blueprint
blueprint_asset = Blueprint(
    name=PROJECT_PREFIX,
    import_name=__name__,
)


# Import `asset` module
from backend.asset import asset
