export function updateResultsTable(data) {
    const tableBody = document.querySelector('#resultsTable tbody');
    tableBody.innerHTML = ''; // Clear previous table data

    // Populate the table with the simulated data
    data.forEach(dataDay => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${dataDay.day}</td>
        <td>${dataDay.cash}</td>
        <td>${dataDay.accountsReceivable}</td>
        <td>${dataDay.accountsPayable}</td>
        `;
        tableBody.appendChild(row);
    });
}