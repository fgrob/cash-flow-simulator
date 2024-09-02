import { round } from "./utils.js";

class Company {
    constructor(cash){
        this.cash = cash; // Available cash
        this.accountsReceivable = 0; // Accounts receivable (credit sales)
        this.accountsPayable = 0; // Accounts payable (credit purchases)
        this.paymentSchedule = {}; // Schedule of future payments (purchases and sales)
        this.data = []; // Stores the company's financial history (every day)
    }

    buy(price, paymentDay) {
        // Registers a credit purchase, increasing accounts payable
        this.accountsPayable = round(this.accountsPayable + price);
        this.updatePaymentSchedule(paymentDay, 'purchase', price);
        this.log
    }

    sell(price, paymentDay){
        // Registers a credit sale, increasing accounts receivable
        this.accountsReceivable = round(this.accountsReceivable + price);
        this.updatePaymentSchedule(paymentDay, 'sale', price);
    }

    updatePaymentSchedule(paymentDay, type, amount){
        // Adds an entry to the payment schedule for a future payment or collection
        if (!this.paymentSchedule[paymentDay]) {
            this.paymentSchedule[paymentDay] = []; // Initialize list if no actions are scheduled for this day
        }
        this.paymentSchedule[paymentDay].push({ type, amount }); 
    }

    payPurchase(amount){
        // Processes a payment for a purchase, reducing both cash and accounts payable
        this.cash = round(this.cash - amount);
        this.accountsPayable = round(this.accountsPayable - amount);
    }

    collectSale(amount){
        // Processes a collection for a sale, increasing cash and reducing accounts receivable
        this.cash = round(this.cash + amount);
        this.accountsReceivable = round(this.accountsReceivable - amount);
    }

    dailyBalanceData(day) {
        // Store the financial status for a specific day
        const balance = {
            day: day,
            cash: this.cash,
            accountsReceivable: this.accountsReceivable,
            accountsPayable: this.accountsPayable
        };
        this.data.push(balance);
        return balance // for the simulator log
    }


}

export default Company;
