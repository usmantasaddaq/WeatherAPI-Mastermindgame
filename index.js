const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");
const zipCode = document.querySelector(".ajax-section .zipCode");
const apiKey = "c73aa228bfba692462f96e89080aa39a";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputVal = input.value;
  let zipCode = input.value;

  const listItems = list.querySelectorAll(".ajax-section .city");
  // const zipCodeitems=zipCode.querySelectorAll(".ajax-section .zipCode");
  const listItemsArray = Array.from(listItems);
  // const  zipCodeitemsarray = Array.from(zipCodeitems)

  // if (zipCodeitemsarray.length  > 0) {
  //   const filtereArray = zipCodeitemsarray.filter((el) => {
  //     let content = "";

  //     if (inputVal.includes(",")) {
  //       if (inputVal.split(",")[1].length > 2) {
  //         inputVal = inputVal.split(",")[0];
  //         content = el
  //           .querySelector(".zipCode span")
  //           .textContent.toLowerCase();
  //       } else {
  //         content = el.querySelector(".zipCode").dataset.name.toLowerCase();
  //       }
  //     } else {
  //       content = el.querySelector(".zipCode span").textContent.toLowerCase();
  //     }
  //     return content == inputVal.toLowerCase();
  //   });

  //   if (filtereArray.length > 0) {
  //     msg.textContent = `You already know the weather for ${
  //       filtereArray[0].querySelector(".zipCode span").textContent
  //     } ...otherwise be more specific by providing the country code as well 😉`;
  //     form.reset();
  //     input.focus();
  //     return;
  //   }
  // }

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
      } ...otherwise be more specific by providing the country code as well 😉`;
      form.reset();
      input.focus();
      return;
    }
  }

  //const url2=`http://api.openweathermap.org/data/2.5/forecast?id=${zipCode}&units=metric&appid=${apiKey}`;
  //  const url3=`http://api.openweathermap.org/data/2.5/forecast?lat=${latitudes}&lon=${longitudes}&units=metric&appid=${apiKey}`;

  //    fetch(url3)
  //  .then(response => response.json())
  //  .then(data => {
  //   array.push(data);
  //   console.log("dsf", array);
  //   array.map((user) => {
  //     const markup = `<li class="CityName">${user.city.name},${user.city.country}<li><br>`;
  //     document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
  //     user.list.filter((e, i) => {
  //       let d = new Date(e.dt_txt);
  //       const fahrenheit = (e.main.temp * 1.8) + 32
  //       const day = [
  //         "Sunday",
  //         "Monday",
  //         "Tuesday",
  //         "Wednesday",
  //         "Thursday",
  //         "Friday",
  //         "Saturday",
  //       ];
  //       let weekDay = day[d.getDay()];

  //       const days = `
  //       <li class="dayStyle" id=${e.dt}>${weekDay} </li>
  //              <li  class="Temperature"> ${e.main.temp_min}</li><button Class="ButtonSt">°C</button><button Class="ButtonStd">°F </button>
  //             <li class="humidityP">Pressure: ${e.main.pressure} hPa</li>
  //             <li class="humidityH">Humidity: ${e.main.humidity} %</li>
  //              <li class="humidityW">Wind: ${e.wind.speed} m/s </li>`;

  //       document.querySelector("ul").insertAdjacentHTML("beforeend", days);

  //       e.weather.filter((weath) => {
  //         const weather = `<li class="weathercondition">${weath.main}<li><br>

  //         <li class="daysStyle">
  //     <button id="Monday" class="cardSthyle" onclick="myfunctionM()">
  //       Monday
  //       <img  id="image" class="weatherStyle" src="./icons/clear.svg" />
  //       <span>${e.main.temp_min}°${e.main.temp_max}°</span>
  //     </button>
  //     <button id="Tuesday" class="cardSthyle" onclick="myfunctionT()">
  //       Tuesday<img class="weatherStyle" src="./icons/cloud.svg" /><span
  //         >80 to 88
  //       </span>
  //     </button>
  //     <button id="Wednesday" class="cardSthyle" onclick="myfunctionW()">
  //       Wednesday<img class="weatherStyle" src="./icons/haze.svg" /><span
  //         >80 to 88
  //       </span>
  //     </button>
  //     <button id="Thursday" class="cardSthyle" onclick="myfunctionTh()">
  //       Thursday<img class="weatherStyle" src="./icons/rain.svg" /><span
  //         >80 to 88
  //       </span>
  //     </button>
  //     <button id="Friday" class="cardSthyle" onclick="myfunctionF()">
  //       Friday<img class="weatherStyle" src="./icons/snow.svg" /><span
  //         >80 to 88
  //       </span>
  //     </button>
  //     <button id="Saturday" class="cardSthyle" onclick="myfunctionS()">
  //       Saturday<img class="weatherStyle" src="./icons/storm.svg" /><span
  //         >80 to 88
  //       </span>
  //     </button>
  //   </div>

  //         `;
  //         document
  //           .querySelector("ul")
  //           .insertAdjacentHTML("beforeend", weather);
  //       });
  //     });
  //   });
  // })
  // .catch((error) => console.log(error));

  // fetch(url2)
  //       .then(response => response.json())
  //       .then(data => {
  //         array.push(data);
  //         console.log("dsf", array);
  //         array.map((user) => {
  //           const markup = `<li class="CityName">${user.city.name},${user.city.country}<li><br>`;
  //           document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
  //           user.list.filter((e, i) => {
  //             let d = new Date(e.dt_txt);
  //             const fahrenheit = (e.main.temp * 1.8) + 32
  //             const day = [
  //               "Sunday",
  //               "Monday",
  //               "Tuesday",
  //               "Wednesday",
  //               "Thursday",
  //               "Friday",
  //               "Saturday",
  //             ];
  //             let weekDay = day[d.getDay()];

  //             const days = `
  //             <li class="dayStyle" id=${e.dt}>${weekDay} </li>
  //                    <li  class="Temperature"> ${e.main.temp_min}</li><button Class="ButtonSt">°C</button><button Class="ButtonStd">°F </button>
  //                   <li class="humidityP">Pressure: ${e.main.pressure} hPa</li>
  //                   <li class="humidityH">Humidity: ${e.main.humidity} %</li>
  //                    <li class="humidityW">Wind: ${e.wind.speed} m/s </li>`;

  //             document.querySelector("ul").insertAdjacentHTML("beforeend", days);

  //             e.weather.filter((weath) => {
  //               const weather = `<li class="weathercondition">${weath.main}<li><br>

  //               <li class="daysStyle">
  //           <button id="Monday" class="cardSthyle" onclick="myfunctionM()">
  //             Monday
  //             <img  id="image" class="weatherStyle" src="./icons/clear.svg" />
  //             <span>${e.main.temp_min}°${e.main.temp_max}°</span>
  //           </button>
  //           <button id="Tuesday" class="cardSthyle" onclick="myfunctionT()">
  //             Tuesday<img class="weatherStyle" src="./icons/cloud.svg" /><span
  //               >80 to 88
  //             </span>
  //           </button>
  //           <button id="Wednesday" class="cardSthyle" onclick="myfunctionW()">
  //             Wednesday<img class="weatherStyle" src="./icons/haze.svg" /><span
  //               >80 to 88
  //             </span>
  //           </button>
  //           <button id="Thursday" class="cardSthyle" onclick="myfunctionTh()">
  //             Thursday<img class="weatherStyle" src="./icons/rain.svg" /><span
  //               >80 to 88
  //             </span>
  //           </button>
  //           <button id="Friday" class="cardSthyle" onclick="myfunctionF()">
  //             Friday<img class="weatherStyle" src="./icons/snow.svg" /><span
  //               >80 to 88
  //             </span>
  //           </button>
  //           <button id="Saturday" class="cardSthyle" onclick="myfunctionS()">
  //             Saturday<img class="weatherStyle" src="./icons/storm.svg" /><span
  //               >80 to 88
  //             </span>
  //           </button>
  //         </div>

  //               `;
  //               document
  //                 .querySelector("ul")
  //                 .insertAdjacentHTML("beforeend", weather);
  //             });
  //           });
  //         });
  //       })
  //       .catch((error) => console.log(error));

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
    if (document.getElementById("Centi")) {
      if (document.getElementById("fer").style.display == "none") {
        document.getElementById("fer").style.display = "block";
        document.getElementById("Centi").style.display = "none";
      } else {
        document.getElementById("fer").style.display = "none";
        document.getElementById("Centi").style.display = "block";
      }
    }
  };

  window.myfunctionM = (id) => {
    
    array.map((e) => {
      console.log(array,"array")
      e.list.filter((items) => {
        const fahrenheit = items.main.temp * 1.8 + 32;
        if (id === items.dt) {
          const days = `
          <div class="display">
      <li class="dayStyle" id=${items.dt}></li>
         <li id="Centi" class="Temperature"> ${items.main.temp_min}</li> <button  Class="ButtonSt" onclick="centce()" >°C</button><li id="fer" class="Temperatures"> ${fahrenheit}</li><button  Class="ButtonStd"onclick="fehren()">°F</button>
            <li class="humidityP">Pressure: ${items.main.pressure} hPa</li> 
            <li class="humidityH">Humidity: ${items.main.humidity} %</li> 
             <li class="humidityW">Wind: ${items.wind.speed} m/s </li>
             </div>`;
          document.querySelector("ul").insertAdjacentHTML("beforeend", days);
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
        const markup = `<li class="CityName">${user.city.name},${user.city.country} <li><br>`;
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
          console.log(typeof arr, "arr");
        });
      });
      arr.map((e2) => {
        let day;
        var dt = new Date(e2.dt_txt);
        if (dt.getDay() === 0) {
          day = "Sunday";
          console.log(day, "day");
        } else if (dt.getDay() === 1) {
          day = "Monday";
          console.log(day, "day");
        } else if (dt.getDay() === 2) {
          day = "Tuesday";
          console.log(day, "day");
        } else if (dt.getDay() === 3) {
          day = "Wednesday";
        } else if (dt.getDay() === 4) {
          day = "Thursday";
        } else if (dt.getDay() === 5) {
          day = "Friday";
        } else if (dt.getDay()) {
          day = "Saturday";
        }
        console.log(typeof arr, "arr");
        console.log(e2, "");
        e2.weather.filter((weath) => {
          const weather = `
          <button id=${e2.dt}} class="cardSthyle" onclick="myfunctionM(${e2.dt})">
          <li class="weathercondition">${weath.main}<li><br>
          <li>${day}</li>
          <img  id="image" class="weatherStyle" src="./icons/clear.svg" /><br><br>
          <span>${e2.main.temp_min}°${e2.main.temp_max}°</span>
          </button>
          `;
          document.querySelector("ul").insertAdjacentHTML("beforeend", weather);
        });
      });
    })
    .catch((error) => console.log(error));

  form.reset();
  input.focus();
});
