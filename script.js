// alert("tour-dine landing page");
const countDay = document.querySelector(".day");
const countHour = document.querySelector(".hour");
const countMinute = document.querySelector(".minute");
const countSeconds = document.querySelector(".seconds");
/*const dateRelease = new Date('oct 27, 2022 00:00:00')
console.log(dateRelease.getTime())*/
const dateRelease = new Date("jan 1, 2023 00:00:00").getTime();
function countdown() {
  const currentTime = new Date().getTime();
  const timeLeft = dateRelease - currentTime;
  /* converting a seconds, minute, hour and day in millisecond */
  const seconds = 1000;
  const minute = 60 * seconds;
  const hour = 60 * minute;
  const day = 24 * hour;
  /* converting timeLeft(milliseconds) to day-hour-minute-seconds time format*/
  const daysInTime =
    Math.floor(timeLeft / day) < 10
      ? Math.abs(Math.floor(timeLeft / day))
          .toString()
          .padStart(2, 0)
      : Math.floor(timeLeft / day);
  const hoursInTime =
    Math.floor((timeLeft % day) / hour) < 10
      ? Math.abs(Math.floor((timeLeft % day) / hour))
          .toString()
          .padStart(2, 0)
      : Math.floor((timeLeft % day) / hour);
  const minutesInTime =
    Math.floor((timeLeft % hour) / minute) < 10
      ? Math.abs(Math.floor((timeLeft % hour) / minute))
          .toString()
          .padStart(2, 0)
      : Math.floor((timeLeft % hour) / minute);
  const secondsInTime =
    Math.floor((timeLeft % minute) / seconds) < 10
      ? Math.abs(Math.floor((timeLeft % minute) / seconds))
          .toString()
          .padStart(2, 0)
      : Math.floor((timeLeft % minute) / seconds);
  countDay.innerHTML = daysInTime;
  countHour.innerHTML = hoursInTime;
  countMinute.innerHTML = minutesInTime;
  countSeconds.innerHTML = secondsInTime;
}
window.addEventListener("load", () => {
  setInterval(() => {
    countdown();
    if (
      countDay.innerHTML == "00" &&
      countHour.innerHTML == "00" &&
      countMinute.innerHTML == "00" &&
      countSeconds.innerHTML == "00"
    )
      clearInterval();
  }, 1000);
});
