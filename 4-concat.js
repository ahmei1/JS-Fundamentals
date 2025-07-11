
const arg1 = process.argv[2];
const arg2 = process.argv[3];
const middle = "is";

console.log(
  (arg1 !== undefined ? arg1 : "undefined"),
  middle,
  (arg2 !== undefined ? arg2 : "undefined")
);
