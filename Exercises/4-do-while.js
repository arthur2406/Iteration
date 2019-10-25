'use strict';

const sum = (...args) => {
  let value = 0;
  let i = 0;
  do {
    value += args[i];
    i++;
  } while (i < args.length);
  return value;
};

module.exports = { sum };
