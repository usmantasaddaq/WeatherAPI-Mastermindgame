const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

const apiKey = "c73aa228bfba692462f96e89080aa39a";

form.addEventListener("submit", e => {
  e.preventDefault();
  let inputVal = input.value;
let  zipCode= input.value;

  const listItems = list.querySelectorAll(".ajax-section .city");
  const listItemsArray = Array.from(listItems);

  if (listItemsArray.length > 0) {
    const filteredArray = listItemsArray.filter(el => {
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

 // const url2=`http://api.openweathermap.org/data/2.5/forecast?id=${zipCode}&units=metric&appid=${apiKey}`
 // const url3=`http://api.openweathermap.org/data/2.5/forecast?lat=${latitudes}&lon=${longitudes}&units=metric&appid=${apiKey}` 

//    fetch(url3) 
//    .then(response => response.json()) 
//    .then(data => { 
//     data.forEach( user => { const markup = `<li>${user.name}</li>` 
//     document.querySelector('ul').insertAdjacentHTML('beforeend',markup) }) .catch(error => console.log(error));}) 
//     fetch(url2) 
//     .then(response => response.json())
//      .then(data => {
//          data.forEach( user => 
//             { const markup = `<li>${user.name}</li>`
//              document.querySelector('ul').insertAdjacentHTML('beforeend',markup) })
//               .catch(error => console.log(error));}) 
              










  const url =`http://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&units=metric&appid=${apiKey}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { city } = data;

      console.log("dsf",data)
      const icon = `https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${
        weather[0]["icon"]
      }.svg`;

      let div = document.getElementById("div");
      div.append(  `${data.name} `, markup );
   
    

      
    })
    .catch(() => {
   //   msg.textContent = "invalid";
    });


  //msg.textContent = "";
  form.reset();
  input.focus();
});