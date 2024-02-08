

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

console.log(deleteInvalids([1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]))