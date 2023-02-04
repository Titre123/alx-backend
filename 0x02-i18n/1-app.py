#!/usr/bin/env python3
'''
    Flask application
'''

from flask import Flask, render_template
from babel import Babel
import pytz


class Config:
    '''Config class for configuration'''
    LANGUAGES = ['en', 'fr']

    DEFAULT_LOCALE = 'en'

    TIMEZONE = pytz.utc


app = Flask(__name__)
app.config.from_object(Config)
app.url_map.strict_slashes = False
# babel
babel = Babel(app)


@app.route('/')
def Home():
    '''Home route'''
    return render_template('./0-index.html')


if __name__ == "__main__":
    app.run('localhost', 3000, True)
