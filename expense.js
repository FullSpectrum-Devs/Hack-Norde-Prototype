document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list').getElementsByTagName('tbody')[0];
    const reportDiv = document.getElementById('report');

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    function displayExpenses() {
        expenseList.innerHTML = '';
        expenses.forEach(expense => {
            const row = expenseList.insertRow();
            row.insertCell().textContent = expense.date;
            row.insertCell().textContent = `$${expense.amount.toFixed(2)}`;
            row.insertCell().textContent = expense.category;
            row.insertCell().textContent = expense.description;
        });
    }

    function addExpense(event) {
        event.preventDefault();
        
        const date = document.getElementById('date').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const category = document.getElementById('category').value;
        const description = document.getElementById('description').value;

        if (!date || isNaN(amount) || !category) {
            alert('Please fill out all required fields.');
            return;
        }

        const expense = { date, amount, category, description };
        expenses.push(expense);
        localStorage.setItem('expenses', JSON.stringify(expenses));
        displayExpenses();

        form.reset();
    }

    function generateReport() {
        const totalAmount = expenses.reduce((sum, exp) => sum + exp.amount, 0);
        const totalExpenses = expenses.length;

        reportDiv.innerHTML = `
            <p>Total Expenses: $${totalAmount.toFixed(2)}</p>
            <p>Total Number of Expenses: ${totalExpenses}</p>
        `;
    }

    form.addEventListener('submit', addExpense);
    document.getElementById('generate-report').addEventListener('click', generateReport);

    displayExpenses();
});
