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





  if (listItemsArray.length  > 0) {
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

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      array.push(data);
      console.log("dsf", array);
      array.map((user) => {
        const markup = `<li class="CityName">${user.city.name},${user.city.country}<li><br>`;
        document.querySelector("ul").insertAdjacentHTML("beforeend", markup);
        user.list.filter((e, i) => {
          let d = new Date(e.dt_txt);
          const fahrenheit = (e.main.temp * 1.8) + 32
          const day = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ];
          let weekDay = day[d.getDay()];
          
          function centce(){  
            document.getElementById('Centi').hidden = false;
            document.getElementById('fer').hidden = true;
          }
          function fehren(){
            document.getElementById('Centi').hidden = true;
            document.getElementById('fer').hidden = false;
          }

          const days = `
          <li class="dayStyle" id=${e.dt}>${weekDay} </li>
                 <li id=${Centi} class="Temperature"> ${e.main.temp_min}</li>
                 <button  Class="ButtonSt" onclick=${centce()}>°C</button> <li id=${fer} class="Temperature"> ${fahrenheit}</li> <button  Class="ButtonStd" onclick=${fehren()}>°F</button>
                <li class="humidityP">Pressure: ${e.main.pressure} hPa</li>  
                <li class="humidityH">Humidity: ${e.main.humidity} %</li> 
                 <li class="humidityW">Wind: ${e.wind.speed} m/s </li>`;

          document.querySelector("ul").insertAdjacentHTML("beforeend", days);
  
          e.weather.filter((weath) => {
            const weather = `<li class="weathercondition">${weath.main}<li><br>
            
            <li class="daysStyle">
        <button id="Monday" class="cardSthyle" onclick="myfunctionM()">
          Monday
          <img  id="image" class="weatherStyle" src="./icons/clear.svg" />
          <span>${e.main.temp_min}°${e.main.temp_max}°</span>
        </button>
        <button id="Tuesday" class="cardSthyle" onclick="myfunctionT()">
          Tuesday<img class="weatherStyle" src="./icons/cloud.svg" /><span
            >80 to 88
          </span>
        </button>
        <button id="Wednesday" class="cardSthyle" onclick="myfunctionW()">
          Wednesday<img class="weatherStyle" src="./icons/haze.svg" /><span
            >80 to 88
          </span>
        </button>
        <button id="Thursday" class="cardSthyle" onclick="myfunctionTh()">
          Thursday<img class="weatherStyle" src="./icons/rain.svg" /><span
            >80 to 88
          </span>
        </button>
        <button id="Friday" class="cardSthyle" onclick="myfunctionF()">
          Friday<img class="weatherStyle" src="./icons/snow.svg" /><span
            >80 to 88
          </span>
        </button>
        <button id="Saturday" class="cardSthyle" onclick="myfunctionS()">
          Saturday<img class="weatherStyle" src="./icons/storm.svg" /><span
            >80 to 88
          </span>
        </button>
      </div>
            
            
            
            
            `;
            document
              .querySelector("ul")
              .insertAdjacentHTML("beforeend", weather);
          });
        });
      });
    })
    .catch((error) => console.log(error));

  form.reset();
  input.focus();
});
