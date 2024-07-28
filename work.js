document.getElementById('work-order-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const task = document.getElementById('task').value;
    const priority = document.getElementById('priority').value;
    const dueDate = document.getElementById('due-date').value;
    const worker = document.getElementById('worker').value;

    const workOrder = {
        task,
        priority,
        dueDate,
        worker,
        status: 'Pending'
    };

    addWorkOrderToList(workOrder);
    updateStatusSummary();
    this.reset();
});

function addWorkOrderToList(workOrder) {
    const workOrderList = document.getElementById('work-order-list');
    const workOrderItem = document.createElement('li');

    workOrderItem.innerHTML = `
        <strong>Task:</strong> ${workOrder.task} <br>
        <strong>Priority:</strong> ${workOrder.priority} <br>
        <strong>Due Date:</strong> ${workOrder.dueDate} <br>
        <strong>Assigned to:</strong> ${workOrder.worker} <br>
        <strong>Status:</strong> <span class="status">${workOrder.status}</span> <br>
        <button onclick="changeStatus(this, 'In Progress')">Start</button>
        <button onclick="changeStatus(this, 'Completed')">Complete</button>
    `;

    workOrderList.appendChild(workOrderItem);
}

function changeStatus(button, status) {
    const statusSpan = button.parentNode.querySelector('.status');
    statusSpan.textContent = status;
    updateStatusSummary();
}

function updateStatusSummary() {
    const statuses = document.querySelectorAll('.status');
    let pendingCount = 0;
    let inProgressCount = 0;
    let completedCount = 0;

    statuses.forEach(status => {
        if (status.textContent === 'Pending') pendingCount++;
        else if (status.textContent === 'In Progress') inProgressCount++;
        else if (status.textContent === 'Completed') completedCount++;
    });

    document.getElementById('pending-count').textContent = pendingCount;
    document.getElementById('in-progress-count').textContent = inProgressCount;
    document.getElementById('completed-count').textContent = completedCount;
}
