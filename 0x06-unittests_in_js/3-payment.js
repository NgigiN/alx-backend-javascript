// Implimenting spies with sinon
const calculateNumber = require('./utils').calculateNumber;

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  console.log(`The total is: ` + calculateNumber("SUM", totalAmount, totalShipping));
}

module.exports = sendPaymentRequestToApi;