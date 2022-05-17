import random

import requests
from flask import Flask, render_template

words = requests.get("https://random-word-api.herokuapp.com/all").json()

app = Flask(__name__)

@app.route("/")
def hello_world():
    random_words = random.sample(words,150)
    print(random_words)
    return render_template("base.html",words = random_words)



if __name__ == "__main__":
    app.run()