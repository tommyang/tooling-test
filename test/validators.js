'use strict';

var expect = require('chai').expect;
var assert = require('chai').assert;

describe('isValidEmail', function() {
  before(function() {
    // console.log("hook: isValidEmail starts");
  });

  after(function() {
    // console.log("hook: isValidEmail ends");
  });

  beforeEach(function() {
    // console.log("hook: test case starts");
  });

  afterEach(function() {
    // console.log("hook: test case ends");
  });

  var isValidEmail = require('../app/validators.js').isValidEmail;
  it('should return true for valid email addresses', function() {
    expect(isValidEmail("foursquared@we.rocks.com")).to.be.true;
  });
  it('should return true for valid email addresses with .', function() {
    expect(isValidEmail("group.16@best.group")).to.be.true;
  });
  it('should return true for valid email addresses with +', function() {
    expect(isValidEmail("foursquared+test@e-mail.me")).to.be.true;
  });
  it('should return false for email addresses with no TLD', function() {
    expect(isValidEmail("united@bestairline")).to.be.false;
  });
  it('should return false for email addresses with invalid TLD', function() {
    expect(isValidEmail("marketing@peps.i")).to.be.false;
  });
  it('should return false for email addresses with no @', function() {
    expect(isValidEmail("missingatsign.org")).to.be.false;
  });
  it('should return false for email addresses with more than one @', function() {
    expect(isValidEmail("too@many@at.net")).to.be.false;
  });
  it('should return false for email addresses with no prefix', function() {
    expect(isValidEmail("@missing.info")).to.be.false;
  });
  it('should return false for email addresses containing invalid characters', function() {
    expect(isValidEmail("missingatsign.org")).to.be.false;
  });
});



