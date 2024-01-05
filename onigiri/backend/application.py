"""Root Application

The root application for the backend.
"""

import random
import string

from flask import Flask
from flask_session import Session

from backend import common
from backend.database.database import database


# Application Factory
def create_application(configuration=None):
    """Create Application

    The application factory function.

    :param configuration: (Mapping) The custom configuration for the
        application.
    """

    application = Flask(
        import_name=__name__,
        template_folder='view',
        static_url_path=f'/{common.ROUTE_PREFIX}/{common.STATIC_PREFIX}',
        static_folder=common.STATIC_PREFIX
    )

    # Base Configuration
    application.config.from_object('backend.configuration.BaseConfiguration')

    if configuration is None:
        # Load the Production Configuration
        # application.config.from_object('backend.configuration.ProductionConfiguration')

        # Load the Development Configuration
        application.config.from_object('backend.configuration.DevelopmentConfiguration')
    else:
        # Load the configuration if passed in
        application.config.from_mapping(configuration)

    # Initialize the Database
    # database.init_app(application)

    # Initialize the Session
    Session(application)

    register_blueprint(application)

    return application


# Register Blueprint
def register_blueprint(application):
    """Register Blueprint

    Register the `Blueprint` with the `application`.

    :param application: (Flask) The Flask `application`.
    """

    route_prefix = application.config['APPLICATION_ROOT']

    # Main
    from backend.main import blueprint_main
    application.register_blueprint(blueprint_main, url_prefix=f'/{route_prefix}')

    # Asset
    from backend.asset import blueprint_asset
    application.register_blueprint(blueprint_asset, url_prefix=f'/{route_prefix}/asset')
