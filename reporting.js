document.addEventListener('DOMContentLoaded', function () {
    const activityCtx = document.getElementById('activityChart').getContext('2d');
    const resourceCtx = document.getElementById('resourceChart').getContext('2d');

    const activityChart = new Chart(activityCtx, {
        type: 'bar',
        data: {
            labels: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
            datasets: [{
                label: 'Activities',
                data: [12, 19, 3, 5],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const resourceChart = new Chart(resourceCtx, {
        type: 'pie',
        data: {
            labels: ['Mechanics', 'Parts', 'Tools', 'Misc'],
            datasets: [{
                label: 'Resource Utilization',
                data: [10, 15, 20, 5],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});
