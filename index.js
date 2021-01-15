const form = document.querySelector(".top-banner form");
const form2 = document.querySelector(".top-banner .form2");
const input = document.querySelector(".top-banner input");
const message = document.querySelector(".top-banner .message");
const history = document.querySelector(".top-banner .history-list");
const list = document.querySelector(".ajax-section .cities");

console.log(form);
console.log(form2);
//key weather
const apiKey = "c00f988354e97a7199ab055283b2b424";

form.addEventListener("submit", e => {
	e.preventDefault();
	const listItems = list.querySelectorAll(".ajax-section .city");
	const inputVal = input.value;
	const language = $("#lang-list option:selected").val();
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

form2.addEventListener("submit", e => {
	e.preventDefault();
	const listItems = list.querySelectorAll(".ajax-section .city");
	const inputVal = $("#city-list option:selected").val();
	const language = $("#lang-list option:selected").val();
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

var countryObject = {
    "Afghanistan": {},
    "Albania": {},
    "Algeria": {},
    "American Samoa": {},
    "Andorra": {},
    "Angola": {},
    "Anguilla": {},
    "Antarctica": {},
    "Antigua and Barbuda": {},
    "Argentina": {},
    "Armenia": {},
    "Aruba": {},
    "Australia": {},
    "Austria": {},
    "Azerbaijan": {},
    "Bahamas (the)": {},
    "Bahrain": {},
    "Bangladesh": {},
    "Barbados": {},
    "Belarus": {},
    "Belgium": {},
    "Belize": {},
    "Benin": {},
    "Bermuda": {},
    "Bhutan": {},
    "Bolivia (Plurinational State of)": {},
    "Bonaire, Sint Eustatius and Saba": {},
    "Bosnia and Herzegovina": {},
    "Botswana": {},
    "Bouvet Island": {},
    "Brazil": {},
    "British Indian Ocean Territory (the)": {},
    "Brunei Darussalam": {},
    "Bulgaria": {},
    "Burkina Faso": {},
    "Burundi": {},
    "Cabo Verde": {},
    "Cambodia": {},
    "Cameroon": {},
    "Canada": {},
    "Cayman Islands (the)": {},
    "Central African Republic (the)": {},
    "Chad": {},
    "Chile": {},
    "China": {},
    "Christmas Island": {},
    "Cocos (Keeling) Islands (the)": {},
    "Colombia": {},
    "Comoros (the)": {},
    "Congo (the Democratic Republic of the)": {},
    "Congo (the)": {},
    "Cook Islands (the)": {},
    "Costa Rica": {},
    "Croatia": {},
    "Cuba": {},
    "Curaçao": {},
    "Cyprus": {},
    "Czechia": {},
    "Côte d'Ivoire": {},
    "Denmark": {},
    "Djibouti": {},
    "Dominica": {},
    "Dominican Republic (the)": {},
    "Ecuador": {},
    "Egypt": {},
    "El Salvador": {},
    "Equatorial Guinea": {},
    "Eritrea": {},
    "Estonia": {},
    "Eswatini": {},
    "Ethiopia": {},
    "Falkland Islands (the) [Malvinas]": {},
    "Faroe Islands (the)": {},
    "Fiji": {},
    "Finland": {},
    "France": {},
    "French Guiana": {},
    "French Polynesia": {},
    "French Southern Territories (the)": {},
    "Gabon": {},
    "Gambia (the)": {},
    "Georgia": {},
    "Germany": {},
    "Ghana": {},
    "Gibraltar": {},
    "Greece": {},
    "Greenland": {},
    "Grenada": {},
    "Guadeloupe": {},
    "Guam": {},
    "Guatemala": {},
    "Guernsey": {},
    "Guinea": {},
    "Guinea-Bissau": {},
    "Guyana": {},
    "Haiti": {},
    "Heard Island and McDonald Islands": {},
    "Holy See (the)": {},
    "Honduras": {},
    "Hong Kong": {},
    "Hungary": {},
    "Iceland": {},
    "India": {},
    "Indonesia": {},
    "Iran (Islamic Republic of)": {},
    "Iraq": {},
    "Ireland": {},
    "Isle of Man": {},
    "Israel": {},
    "Italy": {},
    "Jamaica": {},
    "Japan": {"Akita": [],
              "Aomori": [],
              "Chiba": [],
              "Ehime": [],
              "Fukui": [],
              "Fukuoka": [],
              "Fukushima": [],
              "Gifu": [],
              "Gunma": [],
              "Hiroshima": [],
              "Hokkaido": [],
              "Hyogo": [],
              "Ibaragi": [],
              "Ibaraki": [],
              "Ishikawa": [],
              "Iwate": [],
              "Kagawa": [],
              "Kagoshima": [],
              "Kanagawa": [],
              "Kochi": [],
              "Kumamoto": [],
              "Kyoto": [],
              "Mie": [],
              "Miyagi": [],
              "Miyazaki": [],
              "Nagano": [],
              "Nagasaki": [],
              "Nara": [],
              "Niigata": [],
              "Oita": [],
              "Okinawa": [],
              "Osaka": [],
              "Saga": [],
              "Saitama": [],
              "Shiga": [],
              "Shimane": [],
              "Shizuoka": [],
              "Tochigi": [],
              "Tokushima": [],
              "Tokyo": [],
              "Tottori": [],
              "Toyama": [],
              "Wakayama": [],
              "Yamagata": [],
              "Yamaguchi": [],
              "Yamanashi": [], },
    "Jersey": {},
    "Jordan": {},
    "Kazakhstan": {},
    "Kenya": {},
    "Kiribati": {},
    "Korea (the Democratic People's Republic of)": {},
    "Korea (the Republic of)": {},
    "Kuwait": {},
    "Kyrgyzstan": {},
    "Lao People's Democratic Republic (the)": {},
    "Latvia": {},
    "Lebanon": {},
    "Lesotho": {},
    "Liberia": {},
    "Libya": {},
    "Liechtenstein": {},
    "Lithuania": {},
    "Luxembourg": {},
    "Macao": {},
    "Madagascar": {},
    "Malawi": {},
    "Malaysia": {},
    "Maldives": {},
    "Mali": {},
    "Malta": {},
    "Marshall Islands (the)": {},
    "Martinique": {},
    "Mauritania": {},
    "Mauritius": {},
    "Mayotte": {},
    "Mexico": {},
    "Micronesia (Federated States of)": {},
    "Moldova (the Republic of)": {},
    "Monaco": {},
    "Mongolia": {},
    "Montenegro": {},
    "Montserrat": {},
    "Morocco": {},
    "Mozambique": {},
    "Myanmar": {},
    "Namibia": {},
    "Nauru": {},
    "Nepal": {},
    "Netherlands (the)": {},
    "New Caledonia": {},
    "New Zealand": {},
    "Nicaragua": {},
    "Niger (the)": {},
    "Nigeria": {},
    "Niue": {},
    "Norfolk Island": {},
    "Northern Mariana Islands (the)": {},
    "Norway": {},
    "Oman": {},
    "Pakistan": {},
    "Palau": {},
    "Palestine, State of": {},
    "Panama": {},
    "Papua New Guinea": {},
    "Paraguay": {},
    "Peru": {},
    "Philippines (the)": {},
    "Pitcairn": {},
    "Poland": {},
    "Portugal": {},
    "Puerto Rico": {},
    "Qatar": {},
    "Republic of North Macedonia": {},
    "Romania": {},
    "Russian Federation (the)": {},
    "Rwanda": {},
    "Réunion": {},
    "Saint Barthélemy": {},
    "Saint Helena, Ascension and Tristan da Cunha": {},
    "Saint Kitts and Nevis": {},
    "Saint Lucia": {},
    "Saint Martin (French part)": {},
    "Saint Pierre and Miquelon": {},
    "Saint Vincent and the Grenadines": {},
    "Samoa": {},
    "San Marino": {},
    "Sao Tome and Principe": {},
    "Saudi Arabia": {},
    "Senegal": {},
    "Serbia": {},
    "Seychelles": {},
    "Sierra Leone": {},
    "Singapore": {},
    "Sint Maarten (Dutch part)": {},
    "Slovakia": {},
    "Slovenia": {},
    "Solomon Islands": {},
    "Somalia": {},
    "South Africa": {},
    "South Georgia and the South Sandwich Islands": {},
    "South Sudan": {},
    "Spain": {},
    "Sri Lanka": {},
    "Sudan (the)": {},
    "Suriname": {},
    "Svalbard and Jan Mayen": {},
    "Sweden": {},
    "Switzerland": {},
    "Syrian Arab Republic": {},
    "Taiwan (Province of China)": {},
    "Tajikistan": {},
    "Tanzania, United Republic of": {},
    "Thailand": {},
    "Timor-Leste": {},
    "Togo": {},
    "Tokelau": {},
    "Tonga": {},
    "Trinidad and Tobago": {},
    "Tunisia": {},
    "Turkey": {},
    "Turkmenistan": {},
    "Turks and Caicos Islands (the)": {},
    "Tuvalu": {},
    "Uganda": {},
    "Ukraine": {},
    "United Arab Emirates (the)": {},
    "United Kingdom of Great Britain and Northern Ireland (the)": {},
    "United States Minor Outlying Islands (the)": {},
    "United States of America (the)": {},
    "Uruguay": {},
    "Uzbekistan": {},
    "Vanuatu": {},
    "Venezuela (Bolivarian Republic of)": {},
    "Viet Nam": { "An Giang": [],
                  "Ba Ria": [],
                  "Bac Can": [],
                  "Bac Giang": [],
                  "Bac Lieu": [],
                  "Bac Ninh": [],
                  "Ben Tre": [],
                  "Binh Dinh": [],
                  "Binh Duong": [],
                  "Binh Phuoc": [],
                  "Binh Thuan": [],
                  "Ca Mau": [],
                  "Can Tho": [],
                  "Cao Bang": [],
                  "Da Nang": [],
                  "Dac Lac": [],
                  "Dac Nong": [],
                  "Dien Bien": [],
                  "Dong Nai": [],
                  "Dong Thap": [],
                  "Gia Lai": [],
                  "Ha Giang": [],
                  "Ha Nam": [],
                  "Ha Tinh": [],
                  "Hai Duong": [],
                  "Haiphong": [],
                  "Hanoi": [],
                  "Hau Giang": [],
                  "Ho Chi Minh": [],
                  "Hoa Binh": [],
                  "Hung Yen": [],
                  "Khanh Hoa": [],
                  "Kien Giang": [],
                  "Kon Tum": [],
                  "Lai Chau": [],
                  "Lam Dong": [],
                  "Lang Son": [],
                  "Lao Cai": [],
                  "Long An": [],
                  "Nam Dinh": [],
                  "Nghe An": [],
                  "Ninh Binh": [],
                  "Ninh Thuan": [],
                  "Phu Tho": [],
                  "Phu Yen": [],
                  "Quang Binh": [],
                  "Quang Nam": [],
                  "Quang Ngai": [],
                  "Quang Ninh": [],
                  "Quang Tri": [],
                  "Soc Trang": [],
                  "Son La": [],
                  "Tay Ninh": [],
                  "Thai Binh": [],
                  "Thai Nguyen": [],
                  "Thanh Hoa": [],
                  "Thua Thien-Hue": [],
                  "Tien Giang": [],
                  "Tra Vinh": [],
                  "Tuyen Quang": [],
                  "Vinh Long": [],
                  "Vinh Phuc": [],
                  "Vung Tau": [],
                  "Yen Bai": [] },
    "Virgin Islands (British)": {},
    "Virgin Islands (U.S.)": {},
    "Wallis and Futuna": {},
    "Western Sahara": {},
    "Yemen": {},
    "Zambia": {},
    "Zimbabwe": {},
    "Åland Islands": {},
}
window.onload = function () {
    var country_list = document.getElementById("country-list"),
    city_list = document.getElementById("city-list");
    for (var country in countryObject) {
		country_list.options[country_list.options.length] = new Option(country, country);
	}
    country_list.onchange = function () {
		city_list.length = 1; // remove all options bar first
		if (this.selectedIndex < 1) return; // done
		for (var city in countryObject[this.value]) {
			city_list.options[city_list.options.length] = new Option(city, city);
		}
	}
	country_list.onchange(); // reset in case page is reloaded
}














// 現在、ベトナムの環境汚染は深刻な問題になりつつあり、対処するための効果的な解決策はまだありません。 特にハノイ、HCMなどの大都市では...最も有名なのはハノイ市です。
// 現在ハノイでは、天候が悪いにもかかわらず、大気汚染は依然として定期的に発生しており、ピーク時と曇りの日に最も汚染されています。 頻繁に汚染される地域には、ファムヴァンドンストリート、タイホーストリート、ミンカイストリートがあります...