from flask import Flask, render_template

app = Flask(__name__)


#Decorador/ ruta 
#Retorna al navegador
@app.route("/")
def index():
    return render_template("index.html")

@app.route("/soluciones")
def soluciones():
    return render_template("soluciones.html")

@app.route("/vision")
def vision():
    return render_template("vision.html")

@app.route("/programas")
def programas():
    return render_template("programas.html")

@app.route("/blog")
def blog():
    return render_template("blog.html")

@app.route("/privacy")
def privacy():
    return render_template("privacy.html")

#Validar el archivo de ejecucion
if __name__ == "__main__":
    app.run(debug=True) #Se actualiza en cada cambio