from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("JuegosSpace.html")

@app.route("/call-of-duty")
def call_of_duty():
    return render_template("/layout/games/call-of-duty-mobile.html")

@app.route("/sniper-fury")
def sniper_fury():
    return render_template("/layout/games/sniper-fury.html")

@app.route("/asphalt-9")
def asphalt_9():
    return render_template("/layout/games/asphalt-9.html")


@app.route("/terms")
def terms():
    return render_template("terms.html")

@app.route("/privacy")
def privacy():
    return render_template("privacy.html")

@app.route("/empleos")
def empleos():
    return render_template("empleos.html")

@app.route("/about")
def about():
    return render_template("about.html")


if __name__ == "__main__":
    app.run(debug=True)