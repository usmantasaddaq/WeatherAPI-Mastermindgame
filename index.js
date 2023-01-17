const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

const apiKey = "c73aa228bfba692462f96e89080aa39a";

form.addEventListener("submit", (e) => {
  
  e.preventDefault();
  let inputVal = input.value;
  const listItems = list.querySelectorAll(".ajax-section .city");
  const listItemsArray = Array.from(listItems);
  if (listItemsArray.length > 0) {
    const filteredArray = listItemsArray.filter((el) => {
      let content = "";

      if (inputVal.includes(",")) {
        if (inputVal.split(",")[1].length > 2) {
          inputVal = inputVal.split(",")[0];
          content = el
            .querySelector(".city-name span")
            .textContent.toLowerCase();
        } else {
          content = el.querySelector(".city-name").dataset.name.toLowerCase();
        }
      } else {
        content = el.querySelector(".city-name span").textContent.toLowerCase();
      }
      return content == inputVal.toLowerCase();
    });

    if (filteredArray.length > 0) {
      msg.textContent = `You already know the weather for ${
        filteredArray[0].querySelector(".city-name span").textContent
      } ...otherwise be more specific by providing the country code as well`;
      form.reset();
      input.focus();
      return;
    }
  }

  const url = `http://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&units=metric&appid=${apiKey}`;
  let array = [];
  window.centce = () => {
    if (document.getElementById("Centi")) {
      if (document.getElementById("Centi").style.display == "none") {
        document.getElementById("Centi").style.display = "block";
        document.getElementById("fer").style.display = "block";
      } else {
        document.getElementById("Centi").style.display = "none";
        document.getElementById("fer").style.display = "block";
      }
    }
  };
  window.fehren = () => {
    if (document.getElementById("fer")) {
      if (document.getElementById("fer").style.display == "none") {
        document.getElementById("fer").style.display = "block";
        document.getElementById("Centi").style.display = "none";
      } else {
        document.getElementById("fer").style.display = "none";
        document.getElementById("Centi").style.display = "block";
      }
    }
  };
  let image =["clear","cloud","haze","rain","snow"];
  let count = 0;
  window.myfunctionM = (id,i) => {
    
    array.map((e,i) => {

      e.list.filter((items,i) => {
        const fahrenheit = (items.main.temp * 1.8 + 32).toFixed(1);
        if (id === items.dt) {
        i=0
       
          document.querySelector("li").innerHTML = `
   <li class="dayStyle" id=${items.dt}></li>
   <button  Class="ButtonSt" onclick="centce()">°C</button>
   <button  Class="ButtonStd"onclick="fehren()">°F</button>
   <li id="fer" class="Temperatures">${items.main.temp_min}</li>
   <li id="Centi" class="Temperature">${fahrenheit}</li>
          <li class="humidityP">Pressure: ${items.main.pressure} hPa</li> 
          <li class="humidityH">Humidity: ${items.main.humidity} %</li> 
           <li class="humidityW">Wind: ${items.wind.speed} m/s </li>
           <img  id="image" class="Style" src=./icons/${image[i]}.svg />
           `;
          i++;
          }
        });
        
    });
  };

  let arr = [];
  let arr2 = [0, 0, 0, 0, 0, 0, 0];
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      values = data;
      array.push(data);
      array.map((user) => {
        const markup = `<div class="CityName"><li>${user.city.name},${user.city.country} <li></div><br>`;
        document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
        user.list.filter((e, i) => {
          var dt = new Date(e.dt_txt);
          let day;
          if (dt.getDay() === 0 && arr2[0] == 0) {
            day = "Sunday";
          
            arr2[0] = 1;
            arr.push(e);
            console.log(day, "day");
          } else if (dt.getDay() === 1 && arr2[1] === 0) {
            day = "Monday";
            arr2[1] = 1;
            arr.push(e);
            console.log(day, "day");
          } else if (dt.getDay() === 2 && arr2[2] == 0) {
            day = "Tuesday";
            arr2[2] = 1;
            arr.push(e);
            console.log(day, "day");
          } else if (dt.getDay() === 3 && arr2[3] == 0) {
            day = "Wednesday";
            arr2[3] = 1;
            arr.push(e);
          } else if (dt.getDay() === 4 && arr2[4] == 0) {
            day = "Thursday";
            arr2[4] = 1;
            arr.push(e);
          } else if (dt.getDay() === 5 && arr2[5] == 0) {
            day = "Friday";
            arr.push(e);
            arr2[5] = 1;
          } else if (arr[6] == 0 && dt.getDay()) {
            day = "Saturday";
            arr.push(e);
            arr2[6] = 1;
          }
        });
      });
    
      arr.map((e2) => {
        
        let day;
        var dt = new Date(e2.dt_txt);
        if (dt.getDay() === 0) {
          day = "Saturday";
          console.log(day, "day");
        } else if (dt.getDay() === 1) {
          day = "Sunday";
          console.log(day, "day");
        } else if (dt.getDay() === 2) {
          day = "Monday";
          console.log(day, "day");
        } else if (dt.getDay() === 3) {
          day = "Tuesday";
        } else if (dt.getDay() === 4) {
          day = "Wednesday";
        } else if (dt.getDay() === 5) {
          day = "Friday";
        } else if (dt.getDay() == 6) {
          day = "Saturday";
        }
        e2.weather.filter((weath, i) => {
          
          
          
          const weather = `
          <button id=${e2.dt}} class="cardSthyle" onclick="myfunctionM(${e2.dt})">
          <li class="weathercondition">${weath.main}<li><br>
          <li>${day}</li>
       
          <img  id="image" class="weatherStyle" src=./icons/${image[count]}.svg /><br><br>
          <span>${e2.main.temp_min}°${e2.main.temp_max}°</span>
          </button>
          `;
          document.querySelector("ul").insertAdjacentHTML("beforeend", weather);
          count++;
        });
      });
    })
    .catch((error) => console.log(error));
  
  form.reset();
  input.focus();
});
