import os

import json
import glob

import pandas as pd
import numpy as np

from sklearn.externals import joblib
from sklearn.preprocessing import StandardScaler

from flask import Flask, jsonify, render_template, redirect

from SeasonDays import find_season_days, find_session, find_weather

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html") 

@app.route("/predict")
def predict():
    season_days = find_season_days()
    session_days = find_session()
    weather_days = find_weather()   

    return render_template("predict.html", season_days = season_days, session_days = session_days, weather_days = weather_days) 
    
@app.route("/predict/<variable>")
def predictVariable(variable):

    season_days = find_season_days()
    session_days = find_session()
    weather_days = find_weather()
    print(variable)
    sc_x=StandardScaler()

    testing = variable.split("&")
    testing = [float(test.replace("dot", "."))for test in testing]
    testing = np.array(testing)
    test = testing.reshape(1,-1)
    
    expedition_everest = expedition_everest_model.predict(test)
    splash_mountain = splash_mountain_model.predict(test)
    soarin = soarin_model.predict(test)
    rock_n_rollercoaster = rock_n_rollercoaster_model.predict(test)

    prediction = [expedition_everest[0], splash_mountain[0], soarin[0], rock_n_rollercoaster[0]]
    prediction = [int(predict.round()) for predict in prediction]
    print(test)
    print(prediction)
    print(variable)
    return render_template("predict2.html", prediction = prediction, season_days = season_days, session_days = session_days, weather_days = weather_days)

@app.route("/month")
def month():
    return render_template("Month.html")

@app.route("/madlib")
def madlib():
    return render_template("Laura.html")
    
@app.route("/about")
def about():
    return render_template("HowWeMadeThis.html")

@app.route("/pandas")
def pandas():
    return render_template("Pandas_profiliing.html")

if __name__ == "__main__":
    expedition_everest_model = joblib.load('expedition_everest.pkl')
    splash_mountain_model = joblib.load('splash_mountain.pkl')
    soarin_model = joblib.load('soarin.pkl')
    rock_n_rollercoaster_model = joblib.load('rock_n_rollercoaster.pkl')
    app.run(debug=True)
