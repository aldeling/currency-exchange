import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency';

function handleCurrencyForm(event) {
  event.preventDefault();
  let promise = Currency.getExchange();
  promise.then(function(currencyArray) {
    displayRate(currencyArray);
  }, function(errorArray) {
    displayError(errorArray);
  });
}

function displayRate(currencyArray) {
  let userAmount = document.querySelector("#amount").value;
  let userValue = document.querySelector("#exchangeValue").value;
  let exchRate = currencyArray.conversion_rates[userValue];
  if (userValue === "Another Rate") {
    document.querySelector('#finalValue').innerText = ``;
    document.querySelector('#printResponse').innerText = `sorry we have no other options for you`;
  } else {
    document.querySelector('#finalValue').innerText = `your rate is ${exchRate}`;
    document.querySelector('#printResponse').innerText = `your exchange rate is ${userAmount * exchRate}`;
  }
}

function displayError() {
  document.querySelector('#printResponse').innerText = `We were unable to process your request at this time`;
}

window.addEventListener("load", function() {
  document.querySelector("#currency-form").addEventListener("submit", handleCurrencyForm);
});