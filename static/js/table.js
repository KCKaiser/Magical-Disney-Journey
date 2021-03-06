function getUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function createDropdown(select,arrayFunction,data){
    array = arrayFunction(data)
    select.append('option').text("").attr('value', "");
    for(i=0; i<array.length; i++){
        select.append('option').text(array[i].toUpperCase()).attr('value', array[i]);
    };
};

var dataForTable = dataSet;
var eventSelector = d3.select('#eventSelect');
var parkSelector = d3.select('#parkSelect');
var dateSelector = d3.select('#dateSelect');
// var countrySelector = d3.select('#countrySelect');

//select options
// var selectedCountry = ""
var selectedPark = ""
var selectedEvent = ""

//select functions
// function getCountryList(dataForTable){
//     var allCountries = [];
//     for(i=0; i<dataForTable.length; i++){
//         allCountries.push(dataForTable[i].country);
//     };
//     return allCountries.filter(getUnique).sort();
// };

function getParkList(dataForTable){
    var allParks = [];
    for(i=0; i<dataForTable.length; i++){
        allParks.push(dataForTable[i].Park);
    };
    return allParks.filter(getUnique).sort();
};

function getEventList(dataForTable){
    var allEvents = [];
    for(i=0; i<dataForTable.length; i++){
        allEvents.push(dataForTable[i].Event);
    };
    return allEvents.filter(getUnique).sort();
};

//pagination structure
var curPage = 0;
var firstResult = 0;
var lastResult = 50;
var lastPage = Math.floor(dataSet.length/50)
var paginationList = d3.select('.pagination');
paginationList.on('click', paginationClick);
var firstPage = d3.select('#firstPage');
var prevPage = d3.select('#prevPage');
var thisPage = d3.select('#thisPage');
var nextPage = d3.select('#nextPage');
var lastPage = d3.select('#lastPage');
var firstLi = d3.select('#firstLi');
var prevLi = d3.select('#prevLi');
var thisLi = d3.select('#thisLi');
var nextLi = d3.select('#nextLi');
var lastLi = d3.select('#lastLi');

//render initial table
var table = d3.select('#dataTable');
var dataColumns = ["DayofWeek", "Date","Park","Hours","Event", "MagicHours", "EstimatedCrowdLevel"]

function renderTable(dataForTable) {
    firstResult = curPage*50
    if (dataForTable.length - firstResult > 50){
        lastResult = 50;
    }
    else {
        lastResult = (dataForTable.length - firstResult) - 1;
    };
    for(i=0; i<lastResult; i++){
        var newRow = table.append('tr')
        newRow.append('td').attr('style', 'word-wrap: break-word;min-width: 50px;max-width: 400px;').text(firstResult + i + 1);
        for(j=0; j<dataColumns.length; j++){
            var dataPoint = dataForTable[firstResult+i][dataColumns[j]];
            newRow.append('td').attr('style', 'word-wrap: break-word; min-width: 50px;max-width: 400px;').text(dataPoint);
        };
    };
    // createDropdown(countrySelector, getCountryList,dataForTable);
    createDropdown(parkSelector, getParkList, dataForTable);
    createDropdown(eventSelector, getEventList, dataForTable);
    // countrySelector.property('value', selectedCountry);
    parkSelector.property('value', selectedPark);
    eventSelector.property('value', selectedEvent);
    lastPage = Math.floor(dataForTable.length/50)
    renderPagination();
};

renderTable(dataSet);

//handle selections/searches
function clearTable(){
    table.selectAll("td").remove();
    table.selectAll("tr").remove();
};

function clearDropdowns(){
    eventSelector.selectAll('option').remove();
    parkSelector.selectAll('option').remove();
    // countrySelector.selectAll('option').remove();
}

// var dateButton = d3.select('#dateButton');
// var dateInput = d3.select('#dateInput');
// dateButton.on("click", dateClick);

function dateClick(){
    d3.event.preventDefault();
    clearTable();
    clearDropdowns();

  // LOOK HERE - IS THIS WHERE THE ISSUE IS HAPPENING.
  // VARIABLE ISSUE?

    // var selectedDate = dateInput.node().value.toString();
    // console.log(selectedDate);

// CHANGED BELOW FROM DATE TO PARK - 11:57AM 11/7
    setFilters(selectedPark,"Park");
    curPage = 0;
    renderTable(dataForTable);
};

// var cityButton = d3.select('#cityButton');
// var cityInput = d3.select('#cityInput');
// cityButton.on("click", cityClick);

// function cityClick(){
//     d3.event.preventDefault();
//     clearTable();
//     clearDropdowns();
//     var selectedCity = cityInput.node().value.trim().toLowerCase();
//     setFilters(selectedCity,"city");
//     curPage = 0;
//     renderTable(dataForTable);
// };

// countrySelector.on("change", countryChange);
//
// function countryChange(){
//     d3.event.preventDefault();
//     clearTable();
//     selectedCountry = countrySelector.node().value
//     clearDropdowns();
//     setFilters(selectedCountry,"country");
//     curPage = 0;
//     renderTable(dataForTable);
// };

parkSelector.on("change", parkChange);

function parkChange(){
    d3.event.preventDefault();
    clearTable();
    selectedPark = parkSelector.node().value
    clearDropdowns();
    setFilters(selectedPark,"Park");
    curPage = 0;
    renderTable(dataForTable);
};

eventSelector.on("change", eventChange);

function eventChange(){
    d3.event.preventDefault();
    clearTable();
    selectedEvent = eventSelector.node().value
    clearDropdowns();
    setFilters(selectedEvent,"Event");
    curPage = 0;
    renderTable(dataForTable);
};

//filter table data according to selections
function setFilters(value, property)
{
    if (value == ""){
        dataForTable = dataSet;
    }
    else {
        dataForTable = dataForTable.filter(function(dataForTable){
            return dataForTable[property] == value;
        });
    };
};

//clear all
var clearButton = d3.select('#clearSelections');
clearButton.on("click", clearAll);

function clearAll(){
    // selectedCountry = ""
    selectedPark = ""
    selectedEvent = ""
    dataForTable = dataSet
    // dateInput.property('value', selectedDate);
    eventInput.property('value', selectedEvent);
    clearTable();
    clearDropdowns();
    curPage = 0;
    renderTable(dataForTable);
};

//handle pagination
function paginationClick(){
    var paginationButton = d3.event.target;
    if (paginationButton.id == 'prevPage' || paginationButton.id == 'thisPage' || paginationButton.id == 'nextPage'){
        curPage = (paginationButton.text - 1);
    }
    else if (paginationButton.id == 'firstPage' || paginationButton.text == "&laquo;&laquo;"){
        curPage = 0;
    }
    else if (paginationButton.id == 'lastPage' || paginationButton.text == "&raquo;&raquo;"){
        curPage = Math.floor(dataForTable.length/50);
    };
    clearTable();
    clearDropdowns();
    renderTable(dataForTable);
};

function renderPagination() {
    if (curPage == 0){
        prevPage.text("1")
        thisPage.text("2");
        nextPage.text("3");
        firstLi.classed("disabled active", true);
        prevLi.classed("active", true);
        thisLi.classed("active", false);
        nextLi.classed("active", false);
        lastLi.classed("disabled active", false);
    }
    else if(curPage == lastPage){
        prevPage.text(`${lastPage-1}`)
        thisPage.text(`${lastPage}`);
        nextPage.text(`${lastPage+1}`);
        firstLi.classed("disabled active", false);
        prevLi.classed("active", false);
        thisLi.classed("active", false);
        nextLi.classed("active", true);
        lastLi.classed("disabled active", true);
    }
    else {
        prevPage.text(`${curPage}`)
        thisPage.text(`${curPage+1}`);
        nextPage.text(`${curPage+2}`);
        firstLi.classed("disabled active", false);
        prevLi.classed("active", false);
        thisLi.classed("active", true);
        nextLi.classed("active", false);
        lastLi.classed("disabled active", false);
    };
};
