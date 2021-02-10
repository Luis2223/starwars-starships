const api = require("../../utils/api");

class Search {
    async getStarship() {
        try {
            const allStarship = await api.get('/starships')
                .then(resp => {
                    return resp.data.results
                });
            ;
            return allStarship;
        } catch (error) {
            console.error(error)
            throw Object({
                message: 'Failed to connect api',
                stack: error
            })
        }
    }
}

module.exports = new Search();