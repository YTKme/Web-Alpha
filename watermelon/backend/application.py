"""Sandbox Root Application

The root application for the backend.
"""

from flask import Flask

from backend import common


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

    return application
