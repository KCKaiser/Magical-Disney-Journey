const SEASONS = ['JERSEY WEEK', 'SUMMER BREAK',
'SPRING', 'MARDI GRAS', 'COLUMBUS DAY', 'CHRISTMAS PEAK', 'FALL',
'THANKSGIVING', 'CHRISTMAS', 'HALLOWEEN',
'MARTIN LUTHER KING JUNIOR DAY', 'SEPTEMBER LOW', 'MEMORIAL DAY',
'EASTER', 'JULY 4TH', 'PRESIDENTS WEEK']


var dateButton = d3.select('#dateButton');
var dateInput = d3.select('#dateInput');
dateInput.on("change", dateClick);

const predictColumns = ['WDWMAXTEMP', 'inSession', 'WDWrace', 'JERSEY WEEK', 'SUMMER BREAK',
'SPRING', 'MARDI GRAS', 'COLUMBUS DAY', 'CHRISTMAS PEAK', 'FALL',
'THANKSGIVING', 'CHRISTMAS', 'HALLOWEEN',
'MARTIN LUTHER KING JUNIOR DAY', 'SEPTEMBER LOW', 'MEMORIAL DAY',
'EASTER', 'JULY 4TH', 'PRESIDENTS WEEK', 'WINTER', 'MNSSHP', 'MVMCP',
'Fri', 'Wed', 'Tue', 'Sun', 'Thu', 'Mon', 'Sat']

function dateClick(){
    d3.event.preventDefault();
     
    var selectedDate = dateInput.node().value.trim();
    if (selectedDate != ""){
        console.log(selectedDate)

        DateArray = selectedDate.split('-');

        const dates = DateArray.map(
        function(element) { return Number(element); }
        );
        
    
        var birthday = new Date();
        birthday.setFullYear(dates[0], dates[1]-1, dates[2]);

        var weekday = new Array(7);
        weekday[0] = "Sun";
        weekday[1] = "Mon";
        weekday[2] = "Tue";
        weekday[3] = "Wed";
        weekday[4] = "Thu";
        weekday[5] = "Fri";
        weekday[6] = "Sat";

        var n = weekday[birthday.getDay()];
        console.log(n)

        const predictColumns2 = ['WDWMAXTEMP', 'inSession', 'WDWrace', 'JERSEY WEEK', 'SUMMER BREAK',
        'SPRING', 'MARDI GRAS', 'COLUMBUS DAY', 'CHRISTMAS PEAK', 'FALL',
        'THANKSGIVING', 'CHRISTMAS', 'HALLOWEEN',
        'MARTIN LUTHER KING JUNIOR DAY', 'SEPTEMBER LOW', 'MEMORIAL DAY',
        'EASTER', 'JULY 4TH', 'PRESIDENTS WEEK', 'WINTER', 'MNSSHP', 'MVMCP',
        'Fri', 'Wed', 'Tue', 'Sun', 'Thu', 'Mon', 'Sat']
        console.log(predictColumns)
        
        var index = predictColumns2.indexOf(n);
    
        if (predictColumns2.includes(n)) {
        predictColumns2[index] = 1;
        };


        console.log(weather_dict)
        console.log(session_dict)


        
        /////
        
        const dateStr = dates.map(
            function(element) { return element.toString(); }
            );

        var strDate = dateStr[1].concat("-").concat(dateStr[2])

        Object.entries(season_dict).forEach(
            ([key,value]) => 
        {
            if (value.includes(strDate)){
                var index = predictColumns2.indexOf(key);
                predictColumns2[index] = 1;
                console.log(key)
            };
        });

        /////

        Object.entries(session_dict).forEach(
            ([key,value]) => 
        {
            if (strDate == key){
                var index = predictColumns2.indexOf("inSession");
                predictColumns2[index] = value;
                console.log(key)
            };
        });


        //
        
        Object.entries(weather_dict).forEach(
            ([key,value]) => 
        {
            if (strDate == key){
                var index = predictColumns2.indexOf("WDWMAXTEMP");
                predictColumns2[index] = value;
                console.log(key)
            };
        });


        //////

        for (var i = 0; i < predictColumns.length; i++) 
        {
            var index = predictColumns.indexOf(predictColumns[i]);
            if (predictColumns2.includes(predictColumns[i])) 
            {
                predictColumns2[index] = 0;
            };
        };

        predictString = predictColumns2.toString();
        predictString = predictString.replace(/,/g, "&")
        if (predictString.includes(".")){
            predictString = predictString.replace(".", "dot");
        }

        
        console.log(predictString)
        document.getElementById("submit").onclick = function () {
            console.log("hi");
            location.href = `/predict/${predictString}`;
        };
    }
    else {
        console.log("NODATE")
        }
    };
    











