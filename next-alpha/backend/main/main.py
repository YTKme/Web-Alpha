"""Main Route

The main route module for the application.
"""

from flask import current_app
# from flask import redirect
# from flask import request
# from flask import url_for

from backend.main import blueprint_main


# Root
@blueprint_main.route('/', methods=['GET'])
def main():
    current_app.logger.debug('Main Page Loading')
    return 'Main Page'


# # Login
# @blueprint_main.route('/login')
# def login():
#     return redirect(url_for('auth.login'))


# @blueprint_main.route('/logout', methods=['POST'])
# def logout():
#     return redirect(url_for('auth.logout'))


# # Profile
# @blueprint_main.route('/profile', methods=['POST'])
# def profile():
#     return 'Profile Page'
