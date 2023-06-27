const { nextISSTimesForMyLocation } = require("./iss_promised");

nextISSTimesForMyLocation((error, result) => {
  console.log(result);
});