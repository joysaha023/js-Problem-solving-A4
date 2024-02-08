

function calculateMoney(ticketSale) {

    if(ticketSale < 0){
        return "Invalid Number!";
    }
    else if(typeof ticketSale !== "number"){
        return "Please input a Number!!";
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


function checkName(name) {

    if(typeof name !== "string"){
        return "invalid";
    }

    let lowerCaseName = name.toLowerCase();
    let lastNameChar = lowerCaseName.slice(-1);
    let checkCharWord = /["a", "y", "i", "e", "o", "u", "w"]/gi;
    let checkName = lastNameChar.match(checkCharWord);
    if(lastNameChar == checkName){
        return "Good Name";
    }
    else{
        return "Bad Name";
    }
}



function deleteInvalids(array) {
    
    if(!Array.isArray(array)){
        return "Invalid Array!"
    }

    let filtArr = array.filter(virusArr => !isNaN(virusArr));
    let newArr = [];
    for(const num of filtArr){
        const convertArr = num;
        if(typeof convertArr === "number"){
            newArr.push(convertArr)
        }
    }
    return newArr;
}




function password(obj) {

    if(typeof obj !== "object" || !obj.name || !obj.birthYear || !obj.siteName){
        return "invalid!"
    }
    else if(obj.birthYear < 1000 || obj.birthYear > 9999){
            return "invalid!"
    }
    else if(typeof obj.name !== "string" || typeof obj.birthYear !== "number" || typeof obj.siteName !== "string"){
        return "invalid!"
    }

    let str = obj.siteName;
    let finalStr = str.charAt(0).toUpperCase()+str.slice(1)
    let finalResult = `${finalStr}#${obj.name}@${obj.birthYear}`
    return finalResult;
    
}



function monthlySavings(arr , livingCost) {

    if(!Array.isArray(arr) || typeof livingCost !== "number"){
        return "invalid input"
    }
   
    let newArr = [];
    for(let i = 0; i < arr.length; i++){
        const elem = arr[i];
        if(elem >= 3000){
            newArr.push(elem - (elem * 0.2))
        }
        else{
            newArr.push(elem)
        }
    }
    let sum = 0;
    for(const sumArr of newArr){
        sum += sumArr;
    }
    let savings = sum - livingCost;
    if(savings < 0){
        return "earn more"
    }
    return savings;
}
