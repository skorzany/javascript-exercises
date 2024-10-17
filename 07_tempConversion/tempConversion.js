const convertToCelsius = function(F) {
  return Number(((F - 32)/1.8).toFixed(1));
};

const convertToFahrenheit = function(C) {
  return Number((1.8*C + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
