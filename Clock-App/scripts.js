/* Displays Standard Time */

let clock = setInterval(displayTime, 0);

function getBaseTime() {
    let hms = new Date();
    return hms.toLocaleTimeString();
}

/* DISPLAYS MILITARY TIME */
function getMilitaryTime() {
    let militaryHours = new Date();
    let newMilitaryHours = militaryHours.getHours();

    let militaryMinutes = new Date();
    let newMilitaryMinutes = militaryMinutes.getMinutes();

    let militarySeconds = new Date();
    let newMilitarySeconds = militarySeconds.getSeconds();

    return newMilitaryHours + ":" + newMilitaryMinutes + ":" + newMilitarySeconds;
}


/* ALLOWS MILITARY AND STANDARD TIME TO BE TOGGLED */
function displayTime() {
    if (document.querySelector("#military-toggler input:checked")) {
        document.getElementById("time").innerHTML = getMilitaryTime()
    }
    else {
        document.getElementById("time").innerHTML = getBaseTime()
    }
}


/* DISPLAYS DAY OF THE WEEK IN TEXT, MONTH, DATE, AND YEAR. */
let setWeekday = new Date();
let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let n = weekday[setWeekday.getDay()];
document.getElementById("weekday").innerHTML = n + " - "

let d = new Date();
let months =
    ["January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"];
document.getElementById("month").innerHTML = months[d.getMonth()];

let getTodaysDate = new Date();
document.getElementById("date").innerHTML = getTodaysDate.getDate() + ",";

let getFullYear = new Date();
document.getElementById("year").innerHTML = getFullYear.getFullYear();
