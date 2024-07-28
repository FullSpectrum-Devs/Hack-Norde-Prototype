document.getElementById('employeeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const empId = document.getElementById('emp-id').value;
    const empName = document.getElementById('emp-name').value;
    const empHours = document.getElementById('emp-hours').value;
    const empEmail = document.getElementById('emp-email').value;

    const tableBody = document.querySelector('#employeeTable tbody');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${empId}</td>
        <td>${empName}</td>
        <td>${empHours}</td>
        <td>${empEmail}</td>
    `;
    tableBody.appendChild(row);

    // Clear form fields
    document.getElementById('employeeForm').reset();
});
