const { init } = require("./src/lib/response");

console.log(`Welcome to the resistance travel system!`);

const distance = process.argv.slice(2) > 0 ? process.argv.slice(2) : 100000;

console.log(`Calculating the distance of the route...`);

init(distance);
