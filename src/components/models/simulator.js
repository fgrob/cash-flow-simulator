class Simulator {
    constructor(company, buyPrice, buyPaymentDays, buyFrequency, sellPrice, sellPaymentDays, sellFrequency, priceIncreaseFrequency, buyPriceIncrease, sellPriceIncrease) {
        this.company = company;
        this.buyPrice = buyPrice;
        this.buyPaymentDays = buyPaymentDays;
        this.buyFrequency = buyFrequency;
        this.sellPrice = sellPrice;
        this.sellPaymentDays = sellPaymentDays;
        this.sellFrequency = sellFrequency;
        this.priceIncreaseFrequency = priceIncreaseFrequency;
        this.buyPriceIncrease = buyPriceIncrease;
        this.sellPriceIncrease = sellPriceIncrease;
        this.log = [];
    }

    simulate(days) {
        for (let day = 1; day <= days; day++) {

            const logSummary = {
                day: day,
                actions: [],
                balance : []
            };

            // Execute scheduled actions
            if (this.company.paymentSchedule[day]) {
                this.company.paymentSchedule[day].forEach(action => {
                    if (action.type === 'purchase') {
                        this.company.payPurchase(action.amount);
                        logSummary.actions.push(`\u2022 Cash (Purshase Payday): -${action.amount}`)
                        logSummary.actions.push(`\u2022 Accounts Payable: -${action.amount}`)
                    } else if (action.type === 'sale') {
                        this.company.collectSale(action.amount);
                        logSummary.actions.push(`\u2022 Cash (Sale Payday): +${action.amount}`)
                        logSummary.actions.push(`\u2022 Accounts Receivable: -${action.amount}`)
                    }
                })
            }
            // Check if theres a price Increase
            if (day % this.priceIncreaseFrequency === 0) {
                let prevBuyPrice = this.buyPrice;
                let prevSellPrice = this.sellPrice;

                this.buyPrice = Math.round(this.buyPrice * (1 + this.buyPriceIncrease) * 100) / 100;
                this.sellPrice = Math.round(this.sellPrice * (1 + this.sellPriceIncrease) * 100) / 100;

                if (prevBuyPrice !== this.buyPrice){
                    logSummary.actions.push(`\u2022 Buy Price Increase: ${prevBuyPrice} --> ${this.buyPrice}`)
                }   
                if (prevSellPrice !== this.sellPrice){
                    logSummary.actions.push(`\u2022 Sell Price Increase: ${prevSellPrice} --> ${this.sellPrice}`)
                }
            }

            // Buy
            if (day % this.buyFrequency === 0) {
                this.company.buy(this.buyPrice, day + this.buyPaymentDays);
                logSummary.actions.push(`\u2022 Accounts Payable (Buy): +${this.buyPrice}`)
            }

            // Sell
            if (day % this.sellFrequency === 0) {
                this.company.sell(this.sellPrice, day + this.sellPaymentDays);
                logSummary.actions.push(`\u2022 Accounts Receivable (Sell): +${this.sellPrice}`)
            }
            // store the day balance
            const balance = this.company.dailyBalanceData(day);
            logSummary.balance = balance;

            // store the day log
            if (logSummary.actions.length > 0 || day === 1){
                this.log.push(logSummary)
            }
        }
    }
}

export default Simulator