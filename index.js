const whitespace = require('./lib/whitespace');
const special = require('./lib/special');
const alphabet = require('./lib/alphabet');
const numeric = require('./lib/numeric');

const allConsts = Object.assign({}, whitespace, special, alphabet, numeric);
const constring = Object.freeze(allConsts);

module.exports = constring;