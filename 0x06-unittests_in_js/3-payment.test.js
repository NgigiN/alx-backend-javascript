// Tests for the SendPaymentRequestToApi function

const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment').sendPaymentRequestToApi;
const calculateNumber = require('./utils').calculateNumber;

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculate method of utils', () => {
    const spy = sinon.spy(calculateNumber);

    sendPaymentRequestToApi(100, 20);
    expect(spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
    expect(spy.calculateNumber.callCount).to.be.equal(1);
    spy.calculateNumber.restore();
  });
});