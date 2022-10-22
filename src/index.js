import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency';

function handleCurrencyForm(event) {
  event.preventDefault();
}

function displayRate() {
  document.querySelector('#printResponse').innerText = `your exchange rate is{}`
}

function displayError() {
  document.querySelector('#printResponse').innerText = `We were unable to process your request at this time`
}

window.addEventListener("load", function() {
  document.querySelector("#currency-form").addEventListener("submit", handleCurrencyForm);
});