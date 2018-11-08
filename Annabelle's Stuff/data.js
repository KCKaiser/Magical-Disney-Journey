// Shape = Park
// State = Hours
// Country = Event


function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

var dataSet =

[
  {
    "DayofWeek": "Thursday",
    "Date": "11/1/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Friday",
    "Date": "11/2/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Saturday",
    "Date": "11/3/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "Morning; 8:00am to 9:00am",
    "EstimatedCrowdLevel": "High Crowds (7/10)"
  },
  {
    "DayofWeek": "Sunday",
    "Date": "11/4/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (6/10)"
  },
  {
    "DayofWeek": "Monday",
    "Date": "11/5/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "Morning; 8:00am to 9:00am",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Tuesday",
    "Date": "11/6/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Wednesday",
    "Date": "11/7/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Thursday",
    "Date": "11/8/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Light Crowds (4/10)"
  },
  {
    "DayofWeek": "Friday",
    "Date": "11/9/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Saturday",
    "Date": "11/10/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (6/10)"
  },
  {
    "DayofWeek": "Sunday",
    "Date": "11/11/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (6/10)"
  },
  {
    "DayofWeek": "Monday",
    "Date": "11/12/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "Morning; 8:00am to 9:00am",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Tuesday",
    "Date": "11/13/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Wednesday",
    "Date": "11/14/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Light Crowds (4/10)"
  },
  {
    "DayofWeek": "Thursday",
    "Date": "11/15/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Light Crowds (4/10)"
  },
  {
    "DayofWeek": "Friday",
    "Date": "11/16/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (6/10)"
  },
  {
    "DayofWeek": "Saturday",
    "Date": "11/17/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "Morning; 8:00am to 9:00am",
    "EstimatedCrowdLevel": "High Crowds (7/10)"
  },
  {
    "DayofWeek": "Sunday",
    "Date": "11/18/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 9:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "High Crowds (7/10)"
  },
  {
    "DayofWeek": "Monday",
    "Date": "11/19/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 9:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "Morning; 8:00am to 9:00am",
    "EstimatedCrowdLevel": "Dense Crowds (8/10)"
  },
  {
    "DayofWeek": "Tuesday",
    "Date": "11/20/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 9:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Dense Crowds (8/10)"
  },
  {
    "DayofWeek": "Wednesday",
    "Date": "11/21/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 9:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Dense Crowds (9/10)"
  },
  {
    "DayofWeek": "Thursday",
    "Date": "11/22/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 9:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Dense Crowds (9/10)"
  },
  {
    "DayofWeek": "Friday",
    "Date": "11/23/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 9:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Dense Crowds (9/10)"
  },
  {
    "DayofWeek": "Saturday",
    "Date": "11/24/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 9:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "Morning; 8:00am to 9:00am",
    "EstimatedCrowdLevel": "Dense Crowds (8/10)"
  },
  {
    "DayofWeek": "Sunday",
    "Date": "11/25/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "High Crowds (7/10)"
  },
  {
    "DayofWeek": "Monday",
    "Date": "11/26/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (6/10)"
  },
  {
    "DayofWeek": "Tuesday",
    "Date": "11/27/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Wednesday",
    "Date": "11/28/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "Morning; 8:00am to 9:00am",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Thursday",
    "Date": "11/29/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Friday",
    "Date": "11/30/18",
    "Park": "Animal Kingdom",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Rivers of Light",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Thursday",
    "Date": "11/1/18",
    "Park": "EPCOT",
    "Hours": "9:00AM-9:00PM",
    "Event": "Epcot International Food & Wine Festival",
    "MagicHours": "Morning; 8:00am to 9:00am",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Friday",
    "Date": "11/2/18",
    "Park": "EPCOT",
    "Hours": "9:00AM-10PM",
    "Event": "Epcot International Food & Wine Festival",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Saturday",
    "Date": "11/3/18",
    "Park": "EPCOT",
    "Hours": "9:00AM-10PM",
    "Event": "Epcot International Food & Wine Festival",
    "MagicHours": "",
    "EstimatedCrowdLevel": "High Crowds (7/10)"
  },
  {
    "DayofWeek": "Sunday",
    "Date": "11/4/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 10:00PM",
    "Event": "Epcot International Food & Wine Festival",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (6/10)"
  },
  {
    "DayofWeek": "Monday",
    "Date": "11/5/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 10:00PM",
    "Event": "Epcot International Food & Wine Festival",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Tuesday",
    "Date": "11/6/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:00PM",
    "Event": "Epcot International Food & Wine Festival",
    "MagicHours": "Evening; 9:00pm to 11:00pm",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Wednesday",
    "Date": "11/7/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:00PM",
    "Event": "Epcot International Food & Wine Festival",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Thursday",
    "Date": "11/8/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:00PM",
    "Event": "Epcot International Food & Wine Festival",
    "MagicHours": "Morning; 8:00am to 9:00am",
    "EstimatedCrowdLevel": "Light Crowds (4/10)"
  },
  {
    "DayofWeek": "Friday",
    "Date": "11/9/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 10:00PM",
    "Event": "Epcot International Food & Wine Festival",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Saturday",
    "Date": "11/10/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 10:00PM",
    "Event": "Epcot International Food & Wine Festival",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (6/10)"
  },
  {
    "DayofWeek": "Sunday",
    "Date": "11/11/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:00PM",
    "Event": "Epcot International Food & Wine Festival",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (6/10)"
  },
  {
    "DayofWeek": "Monday",
    "Date": "11/12/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:00PM",
    "Event": "IllumiNations Fireworks Show",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Tuesday",
    "Date": "11/13/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:00PM",
    "Event": "IllumiNations Fireworks Show",
    "MagicHours": "Evening; 9:00pm to 11:00pm",
    "EstimatedCrowdLevel": "Light Crowds (4/10)"
  },
  {
    "DayofWeek": "Wednesday",
    "Date": "11/14/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:00PM",
    "Event": "IllumiNations Fireworks Show",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Light Crowds (4/10)"
  },
  {
    "DayofWeek": "Thursday",
    "Date": "11/15/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:00PM",
    "Event": "IllumiNations Fireworks Show",
    "MagicHours": "Morning; 8:00am to 9:00am",
    "EstimatedCrowdLevel": "Light Crowds (4/10)"
  },
  {
    "DayofWeek": "Friday",
    "Date": "11/16/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:00PM",
    "Event": "IllumiNations Fireworks Show",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (6/10)"
  },
  {
    "DayofWeek": "Saturday",
    "Date": "11/17/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:00PM",
    "Event": "IllumiNations Fireworks Show",
    "MagicHours": "",
    "EstimatedCrowdLevel": "High Crowds (7/10)"
  },
  {
    "DayofWeek": "Sunday",
    "Date": "11/18/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:00PM",
    "Event": "IllumiNations Fireworks Show",
    "MagicHours": "",
    "EstimatedCrowdLevel": "High Crowds (7/10)"
  },
  {
    "DayofWeek": "Monday",
    "Date": "11/19/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:00PM",
    "Event": "IllumiNations Fireworks Show",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Dense Crowds (8/10)"
  },
  {
    "DayofWeek": "Tuesday",
    "Date": "11/20/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:00PM",
    "Event": "IllumiNations Fireworks Show",
    "MagicHours": "Evening; 9:00pm to 11:00pm",
    "EstimatedCrowdLevel": "Dense Crowds (8/10)"
  },
  {
    "DayofWeek": "Wednesday",
    "Date": "11/21/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:00PM",
    "Event": "IllumiNations Fireworks Show",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Dense Crowds (9/10)"
  },
  {
    "DayofWeek": "Thursday",
    "Date": "11/22/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:30PM",
    "Event": "IllumiNations Fireworks Show",
    "MagicHours": "Morning; 8:00am to 9:00am",
    "EstimatedCrowdLevel": "Dense Crowds (9/10)"
  },
  {
    "DayofWeek": "Friday",
    "Date": "11/23/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:30PM",
    "Event": "IllumiNations Fireworks Show",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Dense Crowds (9/10)"
  },
  {
    "DayofWeek": "Saturday",
    "Date": "11/24/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:30PM",
    "Event": "IllumiNations Fireworks Show",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Dense Crowds (8/10)"
  },
  {
    "DayofWeek": "Sunday",
    "Date": "11/25/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:30PM",
    "Event": "IllumiNations Fireworks Show",
    "MagicHours": "",
    "EstimatedCrowdLevel": "High Crowds (7/10)"
  },
  {
    "DayofWeek": "Monday",
    "Date": "11/26/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:30PM",
    "Event": "IllumiNations Fireworks Show",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (6/10)"
  },
  {
    "DayofWeek": "Tuesday",
    "Date": "11/27/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:30PM",
    "Event": "IllumiNations Fireworks Show",
    "MagicHours": "Evening; 9:00pm to 11:00pm",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Wednesday",
    "Date": "11/28/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:30PM",
    "Event": "IllumiNations Fireworks Show",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Thursday",
    "Date": "11/29/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:30PM",
    "Event": "IllumiNations Fireworks Show",
    "MagicHours": "Morning; 8:00am to 9:00am",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Friday",
    "Date": "11/30/18",
    "Park": "EPCOT",
    "Hours": "9:00AM - 9:30PM",
    "Event": "IllumiNations Fireworks Show",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Thursday",
    "Date": "11/1/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Star Wars: A Galactic Spectacular",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Friday",
    "Date": "11/2/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Star Wars: A Galactic Spectacular",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Saturday",
    "Date": "11/3/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Star Wars: A Galactic Spectacular",
    "MagicHours": "",
    "EstimatedCrowdLevel": "High Crowds (7/10)"
  },
  {
    "DayofWeek": "Sunday",
    "Date": "11/4/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (6/10)"
  },
  {
    "DayofWeek": "Monday",
    "Date": "11/5/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Star Wars: A Galactic Spectacular",
    "MagicHours": "Morning; 8:00am to 9:00am",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Tuesday",
    "Date": "11/6/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Star Wars: A Galactic Spectacular",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Wednesday",
    "Date": "11/7/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Star Wars: A Galactic Spectacular",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Thursday",
    "Date": "11/8/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Light Crowds (4/10)"
  },
  {
    "DayofWeek": "Friday",
    "Date": "11/9/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Saturday",
    "Date": "11/10/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (6/10)"
  },
  {
    "DayofWeek": "Sunday",
    "Date": "11/11/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "Morning; 8:00am to 9:00am",
    "EstimatedCrowdLevel": "Moderate Crowds (6/10)"
  },
  {
    "DayofWeek": "Monday",
    "Date": "11/12/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Tuesday",
    "Date": "11/13/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Light Crowds (4/10)"
  },
  {
    "DayofWeek": "Wednesday",
    "Date": "11/14/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Light Crowds (4/10)"
  },
  {
    "DayofWeek": "Thursday",
    "Date": "11/15/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Light Crowds (4/10)"
  },
  {
    "DayofWeek": "Friday",
    "Date": "11/16/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (6/10)"
  },
  {
    "DayofWeek": "Saturday",
    "Date": "11/17/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "",
    "EstimatedCrowdLevel": "High Crowds (7/10)"
  },
  {
    "DayofWeek": "Sunday",
    "Date": "11/18/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 9:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "Morning; 8:00am to 9:00am",
    "EstimatedCrowdLevel": "High Crowds (7/10)"
  },
  {
    "DayofWeek": "Monday",
    "Date": "11/19/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 9:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Dense Crowds (8/10)"
  },
  {
    "DayofWeek": "Tuesday",
    "Date": "11/20/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 9:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Dense Crowds (8/10)"
  },
  {
    "DayofWeek": "Wednesday",
    "Date": "11/21/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 9:00PM",
    "Event": "",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Dense Crowds (9/10)"
  },
  {
    "DayofWeek": "Thursday",
    "Date": "11/22/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 9:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Dense Crowds (9/10)"
  },
  {
    "DayofWeek": "Friday",
    "Date": "11/23/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 9:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Dense Crowds (9/10)"
  },
  {
    "DayofWeek": "Saturday",
    "Date": "11/24/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 9:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Dense Crowds (8/10)"
  },
  {
    "DayofWeek": "Sunday",
    "Date": "11/25/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "Morning; 8:00am to 9:00am",
    "EstimatedCrowdLevel": "High Crowds (7/10)"
  },
  {
    "DayofWeek": "Monday",
    "Date": "11/26/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "",
    "EstimatedCrowdLevel": "High Crowds (7/10)"
  },
  {
    "DayofWeek": "Tuesday",
    "Date": "11/27/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Wednesday",
    "Date": "11/28/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Thursday",
    "Date": "11/29/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Friday",
    "Date": "11/30/18",
    "Park": "Hollywood Studios",
    "Hours": "9:00AM - 8:00PM",
    "Event": "Jingle Bell, Jingle Bam!",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Thursday",
    "Date": "11/1/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM-10PM",
    "Event": "Festival of Fantasy Parade",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Friday",
    "Date": "11/2/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM-10PM",
    "Event": "Festival of Fantasy Parade",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Saturday",
    "Date": "11/3/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM-10PM",
    "Event": "Festival of Fantasy Parade",
    "MagicHours": "",
    "EstimatedCrowdLevel": "High Crowds (7/10)"
  },
  {
    "DayofWeek": "Sunday",
    "Date": "11/4/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 10:00PM",
    "Event": "Festival of Fantasy Parade",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (6/10)"
  },
  {
    "DayofWeek": "Monday",
    "Date": "11/5/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 4:30PM",
    "Event": "Festival of Fantasy Parade",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Tuesday",
    "Date": "11/6/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 10:00PM",
    "Event": "Festival of Fantasy Parade",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Wednesday",
    "Date": "11/7/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 10:00PM",
    "Event": "Festival of Fantasy Parade",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Thursday",
    "Date": "11/8/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 6:00PM",
    "Event": "Mickey's Very Merry Christmas Party",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Light Crowds (4/10)"
  },
  {
    "DayofWeek": "Friday",
    "Date": "11/9/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 6:00PM",
    "Event": "Mickey's Very Merry Christmas Party",
    "MagicHours": "Morning; 8:00am to 9:00am",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Saturday",
    "Date": "11/10/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 11:00PM",
    "Event": "Festival of Fantasy Parade",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (6/10)"
  },
  {
    "DayofWeek": "Sunday",
    "Date": "11/11/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 10:00PM",
    "Event": "Festival of Fantasy Parade",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (6/10)"
  },
  {
    "DayofWeek": "Monday",
    "Date": "11/12/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 6:00PM",
    "Event": "Mickey's Very Merry Christmas Party",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Tuesday",
    "Date": "11/13/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 6:00PM",
    "Event": "Mickey's Very Merry Christmas Party",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Light Crowds (4/10)"
  },
  {
    "DayofWeek": "Wednesday",
    "Date": "11/14/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 10:00PM",
    "Event": "",
    "MagicHours": "Evening; 9:00pm to 11:00pm",
    "EstimatedCrowdLevel": "Light Crowds (4/10)"
  },
  {
    "DayofWeek": "Thursday",
    "Date": "11/15/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 6:00PM",
    "Event": "Mickey's Very Merry Christmas Party",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Light Crowds (4/10)"
  },
  {
    "DayofWeek": "Friday",
    "Date": "11/16/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 6:00PM",
    "Event": "Mickey's Very Merry Christmas Party",
    "MagicHours": "Morning; 8:00am to 9:00am",
    "EstimatedCrowdLevel": "Moderate Crowds (6/10)"
  },
  {
    "DayofWeek": "Saturday",
    "Date": "11/17/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 11:00PM",
    "Event": "Festival of Fantasy Parade",
    "MagicHours": "",
    "EstimatedCrowdLevel": "High Crowds (7/10)"
  },
  {
    "DayofWeek": "Sunday",
    "Date": "11/18/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 11:00PM",
    "Event": "Festival of Fantasy Parade",
    "MagicHours": "",
    "EstimatedCrowdLevel": "High Crowds (7/10)"
  },
  {
    "DayofWeek": "Monday",
    "Date": "11/19/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 11:00PM",
    "Event": "Festival of Fantasy Parade",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Dense Crowds (8/10)"
  },
  {
    "DayofWeek": "Tuesday",
    "Date": "11/20/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 11:00PM",
    "Event": "Festival of Fantasy Parade",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Dense Crowds (8/10)"
  },
  {
    "DayofWeek": "Wednesday",
    "Date": "11/21/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 11:00PM",
    "Event": "Festival of Fantasy Parade",
    "MagicHours": "Evening; 9:00pm to 11:00pm",
    "EstimatedCrowdLevel": "Dense Crowds (9/10)"
  },
  {
    "DayofWeek": "Thursday",
    "Date": "11/22/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 11:00PM",
    "Event": "Festival of Fantasy Parade",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Dense Crowds (9/10)"
  },
  {
    "DayofWeek": "Friday",
    "Date": "11/23/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 11:00PM",
    "Event": "Festival of Fantasy Parade",
    "MagicHours": "Morning; 8:00am to 9:00am",
    "EstimatedCrowdLevel": "Dense Crowds (9/10)"
  },
  {
    "DayofWeek": "Saturday",
    "Date": "11/24/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 11:00PM",
    "Event": "Festival of Fantasy Parade",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Dense Crowds (8/10)"
  },
  {
    "DayofWeek": "Sunday",
    "Date": "11/25/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 6:00PM",
    "Event": "Mickey's Very Merry Christmas Party",
    "MagicHours": "",
    "EstimatedCrowdLevel": "High Crowds (7/10)"
  },
  {
    "DayofWeek": "Monday",
    "Date": "11/26/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 10:00PM",
    "Event": "",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (6/10)"
  },
  {
    "DayofWeek": "Tuesday",
    "Date": "11/27/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 6:00PM",
    "Event": "Mickey's Very Merry Christmas Party",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Wednesday",
    "Date": "11/28/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 10:00PM",
    "Event": "",
    "MagicHours": "Evening; 9:00pm to 11:00pm",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Thursday",
    "Date": "11/29/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 6:00PM",
    "Event": "Mickey's Very Merry Christmas Party",
    "MagicHours": "",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  },
  {
    "DayofWeek": "Friday",
    "Date": "11/30/18",
    "Park": "Magic Kingdom",
    "Hours": "9:00AM - 6:00PM",
    "Event": "Mickey's Very Merry Christmas Party",
    "MagicHours": "Morning; 8:00am to 9:00am",
    "EstimatedCrowdLevel": "Moderate Crowds (5/10)"
  }
]


d3.select("tbody")
  .selectAll("tr")
  .data(dataSet)
  .enter()
  .append("tr")
  .html(function(d) {
    return `<td>${d.DayofWeek}</td><td>${d.Date}</td><td>${d.Park}</td><td>${d.Hours}</td><td>${d.Event}</td><td>${d.MagicHours}</td><td>${d.EstimatedCrowdLevel}</td>`;
  });
