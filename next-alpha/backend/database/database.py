"""Database Route

The database route module for the application.
"""

from flask_sqlalchemy import SQLAlchemy

from backend.database.base import Base


database = SQLAlchemy(model_class=Base)
