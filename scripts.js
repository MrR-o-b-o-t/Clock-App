/* Displays Standard Time */

let clock = setInterval(displayTime, 0);

/* ALLOWS MILITARY AND STANDARD TIME TO BE TOGGLED */
function displayTime() {
  const isMilitaryTime = document.querySelector(
    "#military-toggler input:checked"
  );

  const currentDate = new Date();

  const hours = isMilitaryTime ? currentDate.getHours() : getStandardHours(currentDate);
  const minutes = formatTime(currentDate.getMinutes());
  const seconds = formatTime(currentDate.getSeconds());
  const amPm = isMilitaryTime ? "" : getAmPm(currentDate);

  document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds} ${amPm}`;

  /* DISPLAYS DAY OF THE WEEK IN TEXT, MONTH, DATE, AND YEAR. */
  document.getElementById("weekday").innerHTML = getDay(currentDate) + " - ";
  document.getElementById("month").innerHTML = getMonth(currentDate);
  document.getElementById("date").innerHTML = currentDate.getDate() + ",";
  document.getElementById("year").innerHTML = currentDate.getFullYear();
}

function getAmPm(date) {
  if (date.getHours() < 12) {
    return "AM";
  }
  return "PM";
}

function getStandardHours(date) {
  const hours = date.getHours();
  if (hours > 12) {
    return hours - 12;
  }
  if (hours === 0) {
    return 12;
  }
  return hours;
}

function getDay(date) {
  let weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  return weekday[date.getDay()];
}

function getMonth(date) {
  let months = [
    "January",
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
    "December"
  ];

  return months[date.getMonth()];
}

function formatTime(time) {
  if (time < 10) {
    return "0" + time;
  }
  return time;
}
