const convertToCelsius = function(Fahren) {
  const converted = (Fahren - 32) * 5/9;
  return (Math.round(converted * 10) / 10);
  
};

const convertToFahrenheit = function(Celsius) {
  const converted2 = (Celsius * 9/5 + 32);
  return (Math.round(converted2 * 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
