document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('getTimes').addEventListener('click', () => {
        const city = document.getElementById('city').value;
        const country = document.getElementById('country').value;

        if (city && country) {
            const url = `http://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=2`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const timings = data.data.timings;
                    const prayerTimesList = document.getElementById('prayerTimesList');
                    prayerTimesList.innerHTML = '';

                    for (const [name, time] of Object.entries(timings)) {
                        const listItem = document.createElement('li');
                        listItem.textContent = `${name}: ${time}`;
                        prayerTimesList.appendChild(listItem); 
                    }
                })
                .catch(error => console.error('Error fetching prayer times:', error));
        } else {
            alert('Please enter both city and country');
        }
    });
});
