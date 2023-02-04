#!/usr/bin/env python3
'''
    Flask application
'''

from flask import Flask, render_template
from babel import Babel
import pytz


class Config:
    """Represents a Flask Babel configuration.
    """
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = pytz.utc


app = Flask(__name__)
app.config.from_object(Config)
app.url_map.strict_slashes = False
babel = Babel(app)


@app.route('/')
def Home():
    '''Home route'''
    return render_template('./1-index.html')


if __name__ == "__main__":
    app.run('localhost', 3000, True)
