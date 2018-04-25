// Instantiate Storage
const storage = new Storage;
// Get stored location
const weatherLocation = storage.getLocationData();

// Instantiate Weather, UI classes
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI;



// DOMcontentLoaded event listener
document.addEventListener('DOMContentLoaded', getWeathers );

function getWeathers() {
            //call getweather event
            weather.getWeather()
            .then(results => {
                ui.paint(results);
            })
            .catch(err => console.log(err));
}

// Event listener for modal button
document.getElementById('w-change-btn').addEventListener('click', (e) => {

    let city = document.getElementById('city').value;
    let state = document.getElementById('state').value;

    // call chamge location 
    weather.changeLocation(city, state);
    
    // Store Location to LS
    storage.setLocationData(city, state);

    // Get weather and display weather
    getWeathers();

    // Close modal
    $('#locModal').modal('hide');

     // Clear modal input
     city = '', state = '';
});