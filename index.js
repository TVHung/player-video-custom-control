const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const message = document.querySelector(".top-banner .message");
const list = document.querySelector(".ajax-section .cities");

//key weather
const apiKey = "c00f988354e97a7199ab055283b2b424";

form.addEventListener("submit", e => {
  e.preventDefault();
  const listItems = list.querySelectorAll(".ajax-section .city");
  const inputVal = input.value;

  //ajax
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, name, sys, weather } = data;
      const icon = `https://openweathermap.org/img/wn/${
        weather[0]["icon"]
      }@2x.png`;
      const li = document.createElement("li");
      li.classList.add("city");
      console.log(weather[0]);
      const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}">
          <span>${name}</span>
          <sup>${sys.country}</sup>
        </h2>
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup> ${(Math.round(main.temp)*1.8 + 32).toFixed(1)}<sup>°F</sup></div>
        <figure>
          <img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
          <figcaption>${weather[0]["description"]}</figcaption>
        </figure>
      `;
      li.innerHTML = markup;
      list.appendChild(li);
    })
    .catch(() => {
      message.textContent = "Không tìm thấy thành phố này, hãy thử lại!";
    });

  message.textContent = "";
  form.reset();
  input.focus();
});

$("#delBtn").click(function(){
	$('ul').empty()
});