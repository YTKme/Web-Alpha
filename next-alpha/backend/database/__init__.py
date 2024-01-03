"""Database Blueprint

The database blueprint implements the configuration for the database
package.
"""

from flask import Blueprint


PROJECT_PREFIX = 'database'

# Create the `database` blueprint
blueprint_database = Blueprint(
    name=PROJECT_PREFIX,
    import_name=__name__,
)


# Import `database` module
from . import database
