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
  let userValue = document.querySelector("#exchangeValue").value;
  document.querySelector('#printResponse').innerText = `your exchange rate is ${currencyArray.conversion_rates[userValue]}`;
}

function displayError() {
  document.querySelector('#printResponse').innerText = `We were unable to process your request at this time`;
}

window.addEventListener("load", function() {
  document.querySelector("#currency-form").addEventListener("submit", handleCurrencyForm);
});