'use strict';
// FIXME: needs file header

/**
 * @method isValidEmail
 * Checks if the input value is well-formed email address syntax wise.
 * Does not mean address is currently working.
 * @parameter {String} emailInput - input to validate
 * @return {Boolean} - true if well-formed
 *
 * RegExp copied from http://emailregex.com
 * There is no perfect email regex, this one claims that it tries to conform to RFC 5322.
 */
const isValidEmail = (emailInput) => {
  var emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailRegExp.exec(emailInput))  {
    // FIXME: needs additional error handling?
    return false;
  }
  else {
    return true;
  }
};
exports.isValidEmail = isValidEmail;
