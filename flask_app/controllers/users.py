from flask_app import app
from flask import render_template, redirect, request

@app.route('/') 
def login_page(): 
    return render_template("login_page.html")

@app.route('/register')
def register_page():
    return render_template("register_page.html")

@app.route('/login', methods = ['POST'])
def login():
    print(request.form)
    return redirect('/loginplayer2')

@app.route('/loginplayer2')
def logintemplate():
    return render_template("login_page_user2.html")

@app.route('/trial', methods = ['POST'])
def registration(): 
    print(request.form)
    return redirect('/')

@app.route("/login2", methods = ['POST'])
def login2():
    print(request.form)
    return redirect("/gameplay")

@app.route('/gameplay')
def game():
    print("gametime!!")
    return render_template('connect4.html')
