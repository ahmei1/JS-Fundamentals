const count = parseInt(process.argv[2]);

let output = "";
for (let i = 0; i < count; i++) {
  output += "C is fun\n";
}

console.log(isNaN(count) ? "Missing number of occurrences" : output.trim());
