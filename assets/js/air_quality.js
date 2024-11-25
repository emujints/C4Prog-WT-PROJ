document.addEventListener('DOMContentLoaded', () => {
    const getDataBtn = document.getElementById('getDataBtn');
    const cityInput = document.getElementById('city');
    const output = document.getElementById('output');

    getDataBtn.addEventListener('click', () => {
        const city = cityInput.value.trim();

        if (!city) {
            output.innerHTML = '<p class="text-red-500">Please enter a city name.</p>';
            return;
        }

        // Fetch Air Quality Data
        fetch(`https://api.api-ninjas.com/v1/airquality?city=${city}`, {
            method: 'GET',
            headers: {
                'X-Api-Key': 'G8q2QXiZPSDnMndpBDtGBw==ocAh3PbzkAaaQL1h',
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                if (Object.keys(data).length > 0) {
                    output.innerHTML = `
                        <div class="accent-green-200">
                            <p><strong>City:</strong> ${city}</p>
                            <p><strong>Air Quality Index:</strong> ${data.overall_aqi}</p>
                     
                        </div>`;
                } else {
                    output.innerHTML = '<p class="text-yellow-500">No data found for this city.</p>';
                }
            })
            .catch((error) => {
                output.innerHTML = '<p class="text-red-500">Error fetching data. Please try again later.</p>';
                console.error('Fetch error:', error);
            });
    });
});
