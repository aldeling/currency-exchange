export default class Currency {
  constructor(usd) {
    this.usd = usd;
  }

  static getExchange() {
    return new Promise(function (fulfilled, reject) {
      const retrieve = new XMLHttpRequest();
      const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`;
      retrieve.addEventListener('loadend', function() {
        const response = JSON.parse(this.responseText);
        if (this.status === 200) {
          fulfilled (response);
        } else {
          reject (response);
        }
      });
      retrieve.open('GET', url, true);
      retrieve.send();
    });
  }

  createRate() {
    let exchange = this.getExchange();
    let totalRate = (this.usd) * `${exchange.response.conversion_rates["AED"]}`;
    console.log(totalRate);
  }
}