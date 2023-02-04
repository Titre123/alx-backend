#!/usr/bin/env python3
'''
    Flask application
'''

from flask import Flask, render_template
from babel import Babel
import pytz

app = Flask(__name__)

# babel
babel = Babel(app)


class Config(object):
    '''Config class for configuration'''
    LANGUAGES = ['en', 'fr']

    DEFAULT_LOCALE = 'en'

    TIMEZONE = pytz.utc


@app.route('/')
def Home():
    '''Home route'''
    return render_template('./0-index.html')


if __name__ == "__main__":
    app.run('localhost', 3000, True)
