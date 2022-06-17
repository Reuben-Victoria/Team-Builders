const countDown = () => {
  const countDate = new Date("June 17, 2022 05:30:00").getTime();
  console.log(countDate);
  const now = new Date().getTime();
  const difference = countDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(difference / day);
  const textHour = Math.floor((difference % day) / hour);
  const textMinute = Math.floor((difference % hour) / minute);
  const textSecond = Math.floor((difference % minute) / second);

  document.querySelector(".link").style.display = "none";
  document.querySelector("#days").textContent = textDay;
  document.querySelector("#hours").textContent = textHour;
  document.querySelector("#minutes").textContent = textMinute;
  document.querySelector("#seconds").textContent = textSecond;

  if (difference < 0) {
    clearInterval(countDown);
    document.querySelector(".link").style.display = "block";
    document.querySelector("#days").textContent = "00";
    document.querySelector("#hours").textContent = "00";
    document.querySelector("#minutes").textContent = "00";
    document.querySelector("#seconds").textContent = "00";
    document.querySelector(".days").style.display = "none";
    document.querySelector(".hours").style.display = "none";
    document.querySelector(".minutes").style.display = "none";
    document.querySelector(".seconds").style.display = "none";
  }
};

setInterval(countDown, 1000);
