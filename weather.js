class Weather {
    constructor(city, state){
        this.api_key = '482aa36cf92a0e2f';
        this.city = city;
        this.state = state;
    }

    // Fetch weather from wunderground API
    async getWeather(){
        const response = await fetch(`http://api.wunderground.com/api/${this.api_key}/conditions/q/${this.state}/${this.city}.json`);
        const responseData = await response.json();


        return responseData.current_observation;
    }

    // Change Location event
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }

}