const { getHoursInTime } = require("../format");
const { stops } = require("../units/calcStops");

class Parse {
    async parseStarships(starships, distance) {
        const promisesAllStopsStarships = starships.map(async(values) => {
            const { name, consumables, MGLT } = values;
            const timeForConsumable = await getHoursInTime(consumables);
            const stopsBeforeFinishing = await stops(MGLT, timeForConsumable, distance);
            return {
                starship: name,
                stopsBeforeFinishing,
            }
        })

        return (async()=>{
            const result = await Promise.all(promisesAllStopsStarships);
            return result
        })();
        
        
        
    }
}

module.exports = new Parse();