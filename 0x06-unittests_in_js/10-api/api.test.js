const request = require('request');
const { expect } = require('chai');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });

  it('GET /cart/:id returns correct response for valid :id', (done) => {
    request.get(`${API_URL}/cart/47`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 47');
      done();
    });
  });

  it('GET /cart/:id returns 404 response for negative number values in :id', (done) => {
    request.get(`${API_URL}/cart/-47`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /cart/:id returns 404 response for non-numeric values in :id', (done) => {
    request.get(`${API_URL}/cart/d200-44a5-9de6`, (_err, res, _body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('GET /available_payments returns correct response', (done) => {
    request.get(`${API_URL}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      const response = JSON.parse(body);
      expect(response).to.have.property('payment_methods');
      expect(response.payment_methods).to.have.property('credit_cards').that.is.true;
      expect(response.payment_methods).to.have.property('paypal').that.is.false;
      done();
    });
  });

  // Test for login endpoint with username
  it('POST /login returns welcome message with username', (done) => {
    request.post(`${API_URL}/login`, {
      json: { userName: 'JohnDoe' }
    }, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome JohnDoe');
      done();
    });
  });

  // Test for login endpoint with empty body
  it('POST /login returns welcome message with empty username', (done) => {
    request.post(`${API_URL}/login`, { json: {} }, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome ');
      done();
    });
  });
});
