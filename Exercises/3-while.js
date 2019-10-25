'use strict';

const sum = (...args) => {
  let value = 0;
  let i = 0;
  while (i < args.length) {
    value += args[i];
    i++;
  }
  return value;
};

module.exports = { sum };
