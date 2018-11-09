import glob
import pandas as pd
import numpy as np
import datetime as dt

def find_weather():
        
    expedition = pd.read_csv("Resources/expedition_everest.csv")

    weather = expedition.loc[expedition["YEAR"] == 2017]

    weather = weather[["DAYOFYEAR", "WDWMAXTEMP"]]

    days = list(weather["DAYOFYEAR"])

    dates = []
    for day in days:
        date = dt.datetime(2017, 1, 1) + dt.timedelta(day - 1)
        mon = date.month
        da = date.day
        monda = str(mon) + "-" + str(da)
        dates.append(monda)

    temp = list(weather["WDWMAXTEMP"])

    weather_dict = dict(zip(dates, temp))

    return weather_dict

def find_session():
    expedition = pd.read_csv("Resources/expedition_everest.csv")

    insession = expedition.loc[expedition["YEAR"] == 2017]

    insession = insession[["DAYOFYEAR", "inSession"]]

    days = list(insession["DAYOFYEAR"])

    dates = []
    for day in days:
        date = dt.datetime(2017, 1, 1) + dt.timedelta(day - 1)
        mon = date.month
        da = date.day
        monda = str(mon) + "-" + str(da)
        dates.append(monda)

    session = list(insession["inSession"])

    session = [int(sesh[:-1]) for sesh in session]
    session_dict = dict(zip(dates, session))

    return session_dict

def find_season_days():
    filelist = glob.glob('Resources/*.csv')
    foof = {}

    for filename in filelist:
        foof[filename[10:-4]] = pd.read_csv(filename)

    seasons = []
    for season in list(foof["splash_mountain"]["SEASON"].values):
        if season not in seasons:
            seasons.append(season)

    years = [2015, 2016, 2017, 2018]
    season_days = {}
    for s in seasons:
        season_days[s] = list()
    for year in years:
        for s in seasons:

            subset = foof["splash_mountain"].loc[(foof["splash_mountain"]["SEASON"] == s) & (foof["splash_mountain"]["YEAR"] == year)][["DAYOFYEAR", "YEAR"]]

            days = list(subset["DAYOFYEAR"])
            for day in days:
                date = dt.datetime(year, 1, 1) + dt.timedelta(day - 1)
                mon = date.month
                da = date.day
                monda = str(mon) + "-" + str(da)
                season_days[s].append(monda)

    for s in season_days:
        season_days[s] = list(set(season_days[s]))

    return season_days