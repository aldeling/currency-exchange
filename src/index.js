import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './currency';

function handleCurrencyForm(event) {
  event.preventDefault();
}

function displayRate() {

}

function displayError() {

}

window.addEventListener("load", function() {
  document.querySelector("#currency-form").addEventListener("submit", handleCurrencyForm);
});