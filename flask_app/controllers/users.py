from flask_app import app
from flask import render_template, redirect, request

@app.route('/') 
def login_page(): 
    return render_template("login_page.html")

@app.route('/register')
def register_page():
    return render_template("register_page.html")
@app.route('/trial', methods = ['POST'])
def registration(): 
    print(request.form)
    return redirect('/')