const popup = document.querySelector("#popup");
const onpage = document.querySelector("#onpage");
const output = document.querySelector("#output");
const format = document.querySelector("#format");
const months = [
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
  "December",
];
const d = new Date();
function getMydate() {
  let date =
    "The date today is " +
    months[d.getMonth()] +
    " " +
    d.getDate() +
    ", " +
    d.getFullYear() +
    "\n";
  let hour = d.getHours() % 12 || 12;
  let time = "Time time is " + hour + ":" + d.getMinutes();
  return date;
}
function get12Hour() {
  let hour = d.getHours() % 12 || 12;
  let time = "Time time is " + hour + ":" + d.getMinutes();
  return time;
}
function get24Hour() {
  let time = "Time time is " + d.getHours() + ":" + d.getMinutes();
  return time;
}
popup.onclick = function () {
  if (format.value == "12") {
    alert(getMydate() + get12Hour());
  } else {
    alert(getMydate() + get24Hour());
  }
};
onpage.onclick = function () {
  if (format.value == "12") {
    output.innerHTML = getMydate() + "<br>" + get12Hour();
  } else {
    output.innerHTML = getMydate() + "<br>" + get24Hour();
  }
};
