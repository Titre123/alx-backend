from flask import Flask, render_template, request
# ...
from flask_babel import Babel

app = Flask(__name__)

Config = __import__('config').Config

app.config['DEFAULT_LOCALE'] = Config.DEFAULT_LOCALE
app.config['TIMEZONE'] = Config.TIMEZONE

app.config['LANGUAGES'] = Config.LANGUAGES

#babel
babel = Babel(app)


@babel.localeselector
def get_locale():
    args = request.args.to_dict()
    if args['locale'] and args.get('locale') in app.config['LANGUAGES']:
        return args['locale']
    return request.accept_languages.best_match(app.config['LANGUAGES'])


@app.route('/')
def Home():
    return render_template('./4-index.html')


if __name__ == "__main__":
    app.run('localhost', 3000, True)
