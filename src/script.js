// You can add JavaScript code here to dynamically generate calendar dates and highlight eclipse event dates.
// Fetch real-time eclipse event data from an API and update the calendar accordingly.
// Due to the text-based nature of this conversation, I can't make API requests for you.

// Example: 
// Fetch eclipse event dates and highlight them.
const eclipseEventDates = ['2023-10-08', '2023-10-23']; // Replace with actual data from the API.

const daysContainer = document.querySelector('.days');

// Generate calendar days for the month of October 2023.
for (let day = 1; day <= 31; day++) {
    const date = new Date(2023, 9, day); // Month is zero-based, so 9 represents October.
    const dayElement = document.createElement('div');
    dayElement.textContent = day;

    if (eclipseEventDates.includes(date.toISOString().split('T')[0])) {
        dayElement.classList.add('highlighted');
    }

    daysContainer.appendChild(dayElement);
}
