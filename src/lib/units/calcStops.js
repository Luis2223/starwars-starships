class CalcStops {
    async stops(MGLT, timeForConsumable, distance) {
        let spentConsumable = 0;
        let stops = 0;

        for (let index = 0; spentConsumable < distance; index++) {
            spentConsumable += MGLT * timeForConsumable;
            stops = index;
        }

        return stops;
    }
}

module.exports = new CalcStops();