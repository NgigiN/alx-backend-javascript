const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let spyy;

  beforeEach(() => {
    if (!spyy) {
      spyy = sinon.spy(console);
    }
  });

  afterEach(() => {
    spyy.log.resetHistory();
  });

  it('sendsPaymentRequestToApi(100, 20) logs "The total is: 120" to console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(spyy.log.calledWith('The total is: 120')).to.be.true;
    expect(spyy.log.calledOnce).to.be.true;
  });

  it('sendsPaymentRequestToApi(10, 10) logs "The total is 20" to console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(spyy.log.calledWith('The total is: 20')).to.be.true;
    expect(spyy.log.calledOnce).to.be.true;
  });
});
