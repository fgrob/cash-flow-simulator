// Import necessary modules and styles
import Company from "./components/models/company.js";
import Simulator from "./components/models/simulator.js";
import './styles.css';
import './components/tables/logsTableStyles.css';
import { createChart } from "./components/charts/chart.js";
import { updateResultsTable } from "./components/tables/resultsTable.js";
import { logsTable } from "./components/tables/logsTable.js";

// Get input elements by their IDs
const buyPriceInput = document.getElementById("buyPriceInput");
const sellPriceInput = document.getElementById("sellPriceInput");
const buyPaymentDaysInput = document.getElementById("buyPaymentDaysInput");
const sellPaymentDaysInput = document.getElementById("sellPaymentDaysInput");
const buyFrequencyInput = document.getElementById("buyFrequencyInput");
const sellFrequencyInput = document.getElementById("sellFrequencyInput");
const priceIncreaseFrequencyInput = document.getElementById("priceIncreaseFrequencyInput");
const buyPriceIncreaseInput = document.getElementById("buyPriceIncreaseInput");
const sellPriceIncreaseInput = document.getElementById("sellPriceIncreaseInput");
const initialCashInput = document.getElementById("initialCashInput");
const simulationDaysInput = document.getElementById("simulationDaysInput");

let buyPrice, sellPrice, buyPaymentDays, sellPaymentDays, buyFrequency, sellFrequency;
let priceIncreaseFrequency, buyPriceIncrease, sellPriceIncrease, initialCash, simulationDays;

// Run the App
resetValues();
setValues();
simulateCashFlow();

// Add event listeners
addInputListeners();
addButtonsListeners();

// Functions
function addInputListeners() {
    const inputs = [
        buyPriceInput,
        sellPriceInput,
        buyPaymentDaysInput,
        sellPaymentDaysInput,
        buyFrequencyInput,
        sellFrequencyInput,
        priceIncreaseFrequencyInput,
        buyPriceIncreaseInput,
        sellPriceIncreaseInput,
        initialCashInput,
        simulationDaysInput
    ]

    inputs.forEach((input) => {
        input.addEventListener('input', () => {
            setValues();
            simulateCashFlow();
        });
    });
}

// Function to add event listeners
function addButtonsListeners() {
    const resetButton = document.getElementById("resetButton");
    resetButton.addEventListener('click', (e) => {
        e.preventDefault();
        resetValues(); // Reset input values to their defaults
        setValues(); // Update the variables with the reset values
        simulateCashFlow(); // Run the simulation and generate the chart
    });
}

// Function to reset input values to default
function resetValues() {
    buyPriceInput.value = 43;
    sellPriceInput.value = 50;
    buyPaymentDaysInput.value = 30;
    sellPaymentDaysInput.value = 45;
    buyFrequencyInput.value = 8;
    sellFrequencyInput.value = 8;
    priceIncreaseFrequencyInput.value = 21;
    buyPriceIncreaseInput.value = 0.03;
    sellPriceIncreaseInput.value = 0.04;
    initialCashInput.value = 90;
    simulationDaysInput.value = 180;
}

// Function to set variables based on input values
function setValues() {
    buyPrice = Number(buyPriceInput.value);
    sellPrice = Number(sellPriceInput.value);
    buyPaymentDays = Number(buyPaymentDaysInput.value);
    sellPaymentDays = Number(sellPaymentDaysInput.value);
    buyFrequency = Number(buyFrequencyInput.value);
    sellFrequency = Number(sellFrequencyInput.value);
    priceIncreaseFrequency = Number(priceIncreaseFrequencyInput.value);
    buyPriceIncrease = Number(buyPriceIncreaseInput.value);
    sellPriceIncrease = Number(sellPriceIncreaseInput.value);
    initialCash = Number(initialCashInput.value);
    simulationDays = Number(simulationDaysInput.value);
}

// Function to simulate cash flow and update the table and chart
function simulateCashFlow() {
    const company = new Company(initialCash);
    const simulation = new Simulator(
        company,
        buyPrice,
        buyPaymentDays,
        buyFrequency,
        sellPrice,
        sellPaymentDays,
        sellFrequency,
        priceIncreaseFrequency,
        buyPriceIncrease,
        sellPriceIncrease
    );

    // company.buy(buyPrice, buyPaymentDays); // Initiate the buying process
    // company.sell(sellPrice, sellPaymentDays); // Initiate the selling process
    simulation.simulate(simulationDays); // Run the simulation for the specified number of days

    // updateResultsTable(company.data); // Update the table with the simulation data
    logsTable(simulation.log);
    createChart(company.data); // Generate the chart with the new data
}

