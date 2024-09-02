import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

let myChart;

export function createChart(data) {
    // Prepare chart data and options
    const chartData = {
        labels: data.map(row => row.day),
        datasets: [
            {
                label: 'Cash',
                data: data.map(row => row.cash),
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
                tension: 0.4 // Suavizar la línea para un mejor efecto visual
            },
            {
                label: 'Accounts Receivable',
                data: data.map(row => row.accountsReceivable),
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: false,
            },
            {
                label: 'Accounts Payable',
                data: data.map(row => row.accountsPayable),
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: false,
            }
        ]
    };

    if (myChart) {
        // Solo actualiza los datos
        myChart.data.labels = chartData.labels;
        myChart.data.datasets.forEach((dataset, index) => {
            dataset.data = chartData.datasets[index].data;
        });
        myChart.update(); // Evitar animaciones bruscas al actualizar
    } else {
        const ctx = document.getElementById('myChart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'line',
            data: chartData,
            options: {
                responsive: true,
                animation: {
                    duration: 400
                },
                scales: {
                    x: {},
                    y: {
                        beginAtZero: true,
                    }
                }
            }
        });
    }

}