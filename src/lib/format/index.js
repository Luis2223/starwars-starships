const moment = require('moment');

class Format {
    async getHoursInTime(consumable) {
        try {
            const consumablePart = consumable.split(' ');
            const hoursInTime = Math.abs(new Date() - moment(new Date()).add(consumablePart[0], consumablePart[1])) / 36e5
            
            return hoursInTime;
        } catch (error) {
            throw Object({
                message: 'Format time error.',
                stack: error
            })
        }
    }
}

module.exports = new Format();