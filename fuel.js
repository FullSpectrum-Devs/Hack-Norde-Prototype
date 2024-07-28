let fuelEntries = [];

function addFuelEntry() {
    const vehicleName = document.getElementById('vehicleName').value;
    const date = document.getElementById('date').value;
    const fuelAmount = parseFloat(document.getElementById('fuelAmount').value);
    const distance = parseFloat(document.getElementById('distance').value);

    if (!vehicleName || !date || isNaN(fuelAmount) || isNaN(distance)) {
        alert('Please enter valid data.');
        return;
    }

    let mileage = (distance / fuelAmount).toFixed(2);

    const entry = {
        vehicleName,
        date,
        fuelAmount,
        distance,
        mileage
    };

    fuelEntries.push(entry);
    displayEntries();
    updateReport();
    document.getElementById('fuelForm').reset();
    document.getElementById('vehicleName').focus();
}

function displayEntries() {
    const tbody = document.getElementById('fuelTableBody');
    tbody.innerHTML = '';

    fuelEntries.forEach((entry, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${entry.vehicleName}</td>
            <td>${entry.date}</td>
            <td>${entry.fuelAmount.toFixed(2)}</td>
            <td>${entry.distance.toFixed(2)}</td>
            <td>${entry.mileage}</td>
            <td>
                <button onclick="editEntry(${index})">Edit</button>
                <button onclick="deleteEntry(${index})">Delete</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}

function editEntry(index) {
    const entry = fuelEntries[index];

    document.getElementById('vehicleName').value = entry.vehicleName;
    document.getElementById('date').value = entry.date;
    document.getElementById('fuelAmount').value = entry.fuelAmount;
    document.getElementById('distance').value = entry.distance;

    fuelEntries.splice(index, 1);
    displayEntries();
    updateReport();
}

function deleteEntry(index) {
    fuelEntries.splice(index, 1);
    displayEntries();
    updateReport();
}

function sortTable(n) {
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("fuelTable");
    switching = true;
    dir = "asc";

    while (switching) {
        switching = false;
        rows = table.rows;

        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];

            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }

        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
        }
    }
}

function updateReport() {
    const totalFuel = fuelEntries.reduce((sum, entry) => sum + entry.fuelAmount, 0).toFixed(2);
    const totalDistance = fuelEntries.reduce((sum, entry) => sum + entry.distance, 0).toFixed(2);
    const averageMileage = (totalDistance / totalFuel).toFixed(2);

    document.getElementById('totalFuel').innerText = totalFuel;
    document.getElementById('totalDistance').innerText = totalDistance;
    document.getElementById('averageMileage').innerText = averageMileage;
}

function searchEntries() {
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const filteredEntries = fuelEntries.filter(entry =>
        entry.vehicleName.toLowerCase().includes(searchTerm) ||
        entry.date.toLowerCase().includes(searchTerm)
    );

    displayFilteredEntries(filteredEntries);
}

function displayFilteredEntries(entries) {
    const tbody = document.getElementById('fuelTableBody');
    tbody.innerHTML = '';

    entries.forEach((entry, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${entry.vehicleName}</td>
            <td>${entry.date}</td>
            <td>${entry.fuelAmount.toFixed(2)}</td>
            <td>${entry.distance.toFixed(2)}</td>
            <td>${entry.mileage}</td>
            <td>
                <button onclick="editEntry(${index})">Edit</button>
                <button onclick="deleteEntry(${index})">Delete</button>
            </td>
        `;

        tbody.appendChild(row);
    });
}