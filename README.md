# Cash Flow Simulator (CFS)

## Overview

The Cash Flow Simulator (CFS) is a web-based application designed to simulate and visualize the cash flow of a company over a specified period. It allows users to input various parameters related to buying and selling activities, including prices, payment days, frequencies, and price increases. The simulator then calculates the daily cash balance, accounts receivable, and accounts payable based on these inputs and generates a line chart to visualize the cash flow over time.

## Features

- **Simulation of Cash Flow**: Simulate the cash flow based on user-defined parameters such as buy price, sell price, payment days, and frequency of transactions.
- **Visualization**: Visualize the cash flow using a line chart that displays the daily cash balance, accounts receivable, and accounts payable.
- **Dynamic Input Handling**: The simulation updates in real-time as users adjust the input parameters.
- **Price Increase Simulation**: Users can specify how frequently prices should increase and by what percentage, allowing for the simulation of inflation or price adjustments over time.

## How It Works

1. **Initialization**: Upon loading the application, users are presented with a form to input simulation parameters.
2. **Input Parameters**: Users can specify buy and sell prices, payment days, transaction frequencies, price increase frequencies, and the initial cash balance.
3. **Simulation**: Based on the provided inputs, the application simulates each day's transactions, including purchases, sales, payments, and collections.
4. **Visualization**: The application generates a line chart to visualize the cash flow, showing the daily cash balance, accounts receivable, and accounts payable over the simulation period.

## Technical Details

- The application is built using JavaScript, with the core simulation logic encapsulated in the `Company` and `Simulator` classes.
- The `Company` class manages the financial transactions and balances, while the `Simulator` class handles the simulation logic based on user inputs.
- Chart.js is used to generate the line chart for visualizing the cash flow.
- The application is bundled using Webpack and can be served locally for development purposes.

## Project Status

This project is currently in development and has many pending tasks to be completed. The goal is to provide a comprehensive tool for simulating and analyzing cash flow scenarios to aid in financial planning and decision-making.

## Getting Started

To run the Cash Flow Simulator locally:

1. Clone the repository.
2. Install the dependencies using `npm install`.
3. Start the development server using `npm start`.
4. Open your browser and navigate to `http://localhost:9000` to view the application.

## Contributing

Contributions are welcome! If you're interested in improving the Cash Flow Simulator, feel free to fork the repository and submit a pull request.
