// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    // Using the standard wind chill formula for metric units (temperature in °C, wind speed in km/h)
    // Formula: 13.12 + 0.6215*T - 11.37*(V^0.16) + 0.3965*T*(V^0.16)
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));
}

// Function to update footer with current year and last modified date
function updateFooter() {
    // Set current year
    const currentYearElement = document.getElementById('current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }
    
    // Set last modified date
    const lastModifiedElement = document.getElementById('last-modified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
}

// Function to update weather information with wind chill
function updateWeather() {
    // Static values for temperature and wind speed
    const temperature = 28; // °C
    const windSpeed = 5; // km/h
    
    // Display static values
    const temperatureElement = document.getElementById('temperature');
    const windSpeedElement = document.getElementById('wind-speed');
    
    if (temperatureElement) {
        temperatureElement.textContent = temperature;
    }
    
    if (windSpeedElement) {
        windSpeedElement.textContent = windSpeed;
    }
    
    // Calculate and display wind chill only if conditions are met
    const windChillElement = document.getElementById('wind-chill');
    if (windChillElement) {
        // Check conditions for viable wind chill calculation
        // For metric: temperature <= 10°C and wind speed > 4.8 km/h
        if (temperature <= 10 && windSpeed > 4.8) {
            const windChill = calculateWindChill(temperature, windSpeed);
            windChillElement.textContent = `${windChill.toFixed(1)}°C`;
        } else {
            windChillElement.textContent = "N/A";
        }
    }
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    updateFooter();
    updateWeather();
});