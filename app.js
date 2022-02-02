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
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getDate();

// let futureDate = new Date(2022, 1, 4, 20, 44, 0);

const futureDate = new Date(tempYear, tempMonth, tempDay + 12, 11, 30, 0)
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
let month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()]

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year}, ${hours}:${minutes}am`;


//future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const t = futureTime - today;

  //values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  //calculate values
  let days = Math.floor(t / oneDay);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);

  //set values array
  const values = [days, hours, minutes, seconds];

  function format(num) {
    if (num < 10) {
      return (num = `0${num}`);
    }
    return num;
  }


  items.forEach(function (item, index) {
    //index is equivalent to the sequence of execution for each of the items elements
    item.innerHTML = format(values[index]);
  })
  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;
  }
}
//countdown
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime()