let time = setInterval(timer, 0);

function timer() {
    let hms = new Date();
    document.getElementById("time").innerHTML = hms.toLocaleTimeString();
}

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


document.getElementById("millitary-toggler").addEventListener("click", millitaryTime);

function millitaryTime() {
    clearTimeout(time);

    var millitaryHours = new Date();
    var newMillitaryHours = millitaryHours.getHours();

    var millitaryMinutes = new Date();
    var newMillitaryMinutes = millitaryMinutes.getMinutes();

    var millitarySeconds = new Date();
    var newMillitarySeconds = millitarySeconds.getSeconds();

    let millitaryTimer = setInterval(millitaryTime, 0);
    document.getElementById("time").innerHTML = newMillitaryHours + ":" + newMillitaryMinutes + ":" + newMillitarySeconds;
}