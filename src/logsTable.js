export function logsTable(data){
    const tableBody = document.querySelector('#logsTable tbody');
    tableBody.innerHTML = '';

    data.forEach(dataDay => {
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${dataDay.day}</td>
        <td>${dataDay.actions.join('<br>')}</td>
        <td>${dataDay.balance.cash}</td>
        <td>${dataDay.balance.accountsReceivable}</td>
        <td>${dataDay.balance.accountsPayable}</td>
        `;
        tableBody.appendChild(row);
    });
};