from flask import Flask, render_template
# ...
from flask_babel import Babel

app = Flask(__name__)

Config = __import__('config').Config

app.config['DEFAULT_LOCALE'] = Config.DEFAULT_LOCALE
app.config['TIMEZONE'] = Config.TIMEZONE

app.config['LANGUAGES'] = Config.LANGUAGES

#babel
babel = Babel(app)


@app.route('/')
def Home():
    return render_template('./1-index.html')


if __name__ == "__main__":
    app.run('localhost', 3000, True)
