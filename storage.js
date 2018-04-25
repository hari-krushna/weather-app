class Storage {
    constructor() {
        this.city;
        this.state;
        this.default_city = 'Fremont';
        this.default_state = 'CA';
    }

    getLocationData() {

        if (localStorage.getItem('city') === null) {
            this.city = this.default_city;
        } else {
            this.city = localStorage.getItem('city');
        }

        if (localStorage.getItem('state') === null) {
            this.state = this.default_state;
        } else {
            this.state = localStorage.getItem('state');
        }

        return {
            city: this.city,
            state: this.state
        }
    }

    setLocationData(city, state) {
        localStorage.setItem('city', city);
        localStorage.setItem('state', state);
    }
}