"""Asset Route

The asset route module for the application.
"""

from flask import current_app

from backend.asset import blueprint_asset


# Root
@blueprint_asset.route('/', methods=['GET'])
def asset():
    current_app.logger.debug('Asset Page Loading')
    return 'Asset Page'


# Retrieve
@blueprint_asset.route('/retrieve/', methods=['POST'])
def retrieve():
    current_app.logger.debug('Asset Retrieve')
    return 'Asset Retrieve'
