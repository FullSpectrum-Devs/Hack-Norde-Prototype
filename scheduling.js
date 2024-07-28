document.addEventListener('DOMContentLoaded', () => {
    const vehicleForm = document.getElementById('vehicle-form');
    const scheduleTableBody = document.querySelector('#schedule-table tbody');

    vehicleForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const vehicleId = document.getElementById('vehicle-id').value;
        const vehicleType = document.getElementById('vehicle-type').value;
        const startTime = document.getElementById('start-time').value;
        const endTime = document.getElementById('end-time').value;

        if (isValidSchedule(startTime, endTime)) {
            addVehicleToSchedule(vehicleId, vehicleType, startTime, endTime);
            vehicleForm.reset();
        } else {
            alert('End time must be after start time.');
        }
    });

    function isValidSchedule(startTime, endTime) {
        return new Date(startTime) < new Date(endTime);
    }

    function addVehicleToSchedule(vehicleId, vehicleType, startTime, endTime) {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${vehicleId}</td>
            <td>${vehicleType}</td>
            <td>${new Date(startTime).toLocaleString()}</td>
            <td>${new Date(endTime).toLocaleString()}</td>
        `;

        scheduleTableBody.appendChild(row);
    }
});