import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency';

function handleCurrencyForm(event) {
  event.preventDefault();
  let promise = Currency.getExchange();
  promise.then(function(currencyArray) {
    displayRates(currencyArray);
  }, function(errorArray) {
    displayError(errorArray);
  });
}

function displayRate() {
  document.querySelector('#printResponse').innerText = `your exchange rate is ${}`
}

function displayError() {
  document.querySelector('#printResponse').innerText = `We were unable to process your request at this time`
}

window.addEventListener("load", function() {
  document.querySelector("#currency-form").addEventListener("submit", handleCurrencyForm);
});