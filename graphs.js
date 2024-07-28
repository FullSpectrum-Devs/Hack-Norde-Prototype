const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'bar', // Change to 'line', 'pie', etc. as needed
    data: {
        labels: ['Ram', 'Sid', 'Shyam', 'Joy', 'Mahi'],
        datasets: [{
            label: 'Working hours',
            data: [12, 19, 3, 5, 2], // Data values
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
