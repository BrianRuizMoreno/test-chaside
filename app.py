# app.py
from flask import Flask, request, session, redirect, url_for, render_template, send_from_directory
from datetime import datetime, timedelta
import os

app = Flask(__name__, static_folder='.', template_folder='.')
app.secret_key = os.urandom(24)

# Credenciales fijas
USUARIO = "user"
CONTRASENA = "user123"
DURACION = 24  # horas

@app.route("/")
def inicio():
    if "autenticado" in session:
        # Corregimos la comparación de fechas
        expiracion = session.get("expiracion")
        if expiracion and isinstance(expiracion, str):
            expiracion = datetime.fromisoformat(expiracion)
        if expiracion and datetime.utcnow() < expiracion:
            return send_from_directory('.', 'index.html')
    
    return redirect(url_for("login"))

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        usuario = request.form["username"]
        contrasena = request.form["password"]
        if usuario == USUARIO and contrasena == CONTRASENA:
            session["autenticado"] = True
            session["expiracion"] = (datetime.utcnow() + timedelta(hours=DURACION)).isoformat()
            return redirect(url_for("inicio"))
        return render_template("login.html", error=True)
    return render_template("login.html")

@app.route("/logout")
def logout():
    session.clear()
    return redirect(url_for("login"))

@app.route("/<path:filename>")
def archivos_estaticos(filename):
    return send_from_directory('.', filename)

if __name__ == "__main__":
    app.run(debug=True)