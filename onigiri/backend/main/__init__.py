"""Main Blueprint

The main blueprint is the entry point for the application.
"""

from flask import Blueprint

from backend import common


PROJECT_PREFIX = 'main'

# Create the `main` blueprint
blueprint_main = Blueprint(
    name=PROJECT_PREFIX,
    import_name=__name__,
    static_folder=common.STATIC_PREFIX,
    static_url_path=f'/{PROJECT_PREFIX}/{common.STATIC_PREFIX}',
    url_prefix='',
    template_folder='view'
)


# Import `main` module
from backend.main import main
