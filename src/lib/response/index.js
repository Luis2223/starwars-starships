const { parseStarships } = require("../parse");
const { getStarship } = require("../search");

class Response {
    async init(distance) {
        try {
            const starships = await getStarship();
            const stopsBeforeFinishing =  await parseStarships(starships, distance);
            console.log(`The resistance travel system found the following options: `)
            console.log('Available Starships: ', stopsBeforeFinishing);
            console.log(`Thank you for using the resistance travel system. May the force be with you!
            `)
        } catch (error) {
            console.error(error)
        }
    }
}

module.exports = new Response();
