//Problem-01 : Help The Zoo Manager

function calculateMoney(ticketSale) {

    if(ticketSale < 0){
        return "Invalid Number!";
    }
    else if(typeof ticketSale !== "number"){
        return "Please input a Number!!"
    }

    const ticketPrice = 120;
    const daroaanCost = 500;
    const stafCost = 50;

    let totalStafCost = 8 * stafCost;
    let totalCost = daroaanCost + totalStafCost;
    let totalTicketSale = ticketSale * ticketPrice;
    let total = totalTicketSale - totalCost;
    return total;
}

console.log(calculateMoney(10));