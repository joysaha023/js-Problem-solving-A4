


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

console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400))
// console.log(monthlySavings([ 1000 , 2000 , 2500 ] , 5000))
// console.log(monthlySavings([ 900 , 2700 , 3400] , 10000))
// console.log(monthlySavings(100, [ 900 , 2700 , 3400]))