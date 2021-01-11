const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const message = document.querySelector(".top-banner .message");
const history = document.querySelector(".top-banner .history-list");
const list = document.querySelector(".ajax-section .cities");

//key weather
const apiKey = "c00f988354e97a7199ab055283b2b424";

form.addEventListener("submit", e => {
	e.preventDefault();
	const listItems = list.querySelectorAll(".ajax-section .city");
	const inputVal = input.value;
	const language = $("#lang-list option:selected").val();
	var d = new Date();
	var strDate = d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric&lang=${language}`;

	fetch(url)
		.then(response => response.json())
		.then(data => {
			const { main, name, sys, weather, wind} = data;
			console.log(data);
			const name1 = weather[0]["icon"];
			const nameIcon = name1.slice(0, 2) + "d";
			const icon = `https://openweathermap.org/img/wn/${nameIcon}@2x.png`;
			const li = document.createElement("li");
			const li2 = document.createElement("li");
			li.classList.add("city");
			li2.classList.add("his");
			const markup = `
				<h2 class="city-name" data-name="${name},${sys.country}">
					<span>${name}</span>
					<sup>${sys.country}</sup>
				</h2>
				<h3><strong>${strDate}</strong></h3>
				<hr>
				<div class="city-temp">
					${Math.round(main.temp)}<sup>°C</sup> | 
					${(Math.round(main.temp)*1.8 + 32).toFixed(1)}<sup>°F</sup>
				</div>
				<figure>
					<img class="city-icon" src=${icon} alt=${weather[0]["main"]}>
					<figcaption>${weather[0]["description"]}</figcaption>
					<hr>
					<p>Time Zone: ${data.timezone}</p>
					<p>Temp max: ${main.temp_max}</P> 
					<p>Temp min: ${main.temp_min}</p>
					<p>Humidity: ${main.humidity}%</P>
					<p>Wind speed: ${(Math.round(wind.speed) * 3.6).toFixed(1)} km/h</p>
				</figure>
			`;

			const historyItem = `${inputVal}`;
			li.innerHTML = markup;
			list.appendChild(li);
			li2.innerHTML = historyItem;
			history.appendChild(li2);
		})
		.catch(() => {
			message.textContent = "Can't find this area, try again!";
	});

	message.textContent = "";
	form.reset();
	input.focus();
});
$(document).ready(function() {
	$("#delBtn").click(function(){
		$('ul').empty()
	});
});
















// 現在、ベトナムの環境汚染は深刻な問題になりつつあり、対処するための効果的な解決策はまだありません。 特にハノイ、HCMなどの大都市では...最も有名なのはハノイ市です。
// 現在ハノイでは、天候が悪いにもかかわらず、大気汚染は依然として定期的に発生しており、ピーク時と曇りの日に最も汚染されています。 頻繁に汚染される地域には、ファムヴァンドンストリート、タイホーストリート、ミンカイストリートがあります...