const form = document.querySelector('form');
const ul = document.querySelector('ul');
const li = document.querySelector('li');
const button = document.getElementById('button');
const from = document.getElementById('from');
const to = document.getElementById('to');
const valueData = document.getElementById('value');
var currencyDataArray = [];

let currencyData = "https://free.currencyconverterapi.com/api/v5/currencies";

/**
 * Makes API call to conversion API
 */
const conversionRate = (conversion) =>{
  let conversionRateURL = "https://free.currencyconverterapi.com/api/v5/convert?q="+ conversion +"&compact=ultra";
  var dataFromAPI = fetchAnyAPI(conversionRateURL);
  return dataFromAPI;
}

const pSetter = (text) => {
    const list = document.querySelector('list');
    list.textContent = text;
    ul.prependChild(list);
  }

/**
 * Sets the currencies in the DOM
 * @param {*} data 
 */
const currencySetter = (data) => {
  console.log(data)
  for (var item in data) {
    from.innerHTML += "<option>" + data[item].id + "</option>";
    to.innerHTML += "<option>" + data[item].id + "</option>";
  }
    
  }

  /**
   * fetch currency data
   */
var fetchApi = () =>{
    fetch(currencyData)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function(data) {
      // Create and append the currencies 
      currencySetter(data.results);
      })
}

/**
 * Makes API calls
 */
function fetchAnyAPI(url){
  // var result = [];
  fetch(url)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {  
    // return Api data
      var keys = Object.keys(data);    
      keys.forEach(function(key){
      result = data[key];
       var convert = valueData.value * result;
        console.log(valueData.value, result);
        li.innerHTML = to.value+" "+ convert.toFixed(2);      
     });
    })   
   
} 

/**
 * Performs the conversion
 */
  button.addEventListener('click', function (e) {
    e.preventDefault(); 
   
    if(valueData.value === ""){
      alert("The value field is empty");
    
    }else{
       //combine currency
      var combine = from.value + "_" + to.value
      console.log(combine);
      let resultData = conversionRate(combine);
    }
    

  });


  document.addEventListener('DOMContentLoaded', function() {
    fetchApi();
 }, false);