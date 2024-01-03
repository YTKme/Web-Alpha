"""Configuration

The configuration for the application.
"""

import random
import string

from backend import common


class BaseConfiguration(object):
    """Base Configuration"""

    # Application
    APPLICATION_ROOT = common.ROUTE_PREFIX

    # Metadata
    _metadata = common.get_metadata()

    # Artifactory Metadata
    _artifactory_metadata = _metadata['artifactory']
    ARTIFACTORY_HOSTNAME = _artifactory_metadata['hostname']
    ARTIFACTORY_REPOSITORY = _artifactory_metadata['repository']
    ARTIFACTORY_API_KEY = _artifactory_metadata['password']

    # Database Metadata
    _database_metadata = _metadata['database']
    _database_username = _database_metadata['username']
    _database_password = _database_metadata['password']
    _database_hostname = _database_metadata['hostname']
    _database_port = _database_metadata['port']
    _database_name = _database_metadata['database']
    DATABASE_CONFIGURATION = {
        'user': _database_username,
        'password': _database_password,
        'host': _database_hostname,
        'port': _database_port,
        'database': _database_name,
    }

    # Database Connector
    # Documentation: https://docs.sqlalchemy.org/en/20/dialects/mysql.html#module-sqlalchemy.dialects.mysql.mysqlconnector
    SQLALCHEMY_DATABASE_URI = f'mysql+mysqlconnector://{_database_username}:{_database_password}@{_database_hostname}:{_database_port}/{_database_name}'

    # Session
    PERMANENT_SESSION_LIFETIME = 3600
    SESSION_TYPE = 'filesystem'
    SESSION_FILE_DIR = '_session'


class ProductionConfiguration(BaseConfiguration):
    """Production Configuration"""

    SECRET_KEY = ''.join(random.choices(string.ascii_uppercase + string.ascii_lowercase + string.digits, k=32))
    DEBUG = False


class DevelopmentConfiguration(BaseConfiguration):
    """Development Configuration"""

    SECRET_KEY = 'development'
    DEBUG = True
