

function checkName(name) {

    if(typeof name !== "string"){
        return "invalid";
    }

    let lowerCaseName = name.toLowerCase();
    let lastNameChar = lowerCaseName.slice(-1)
    let checkCharWord = /["a", "y", "i", "e", "o", "u", "w"]/gi;
    let checkName = lastNameChar.match(checkCharWord);
    if(lastNameChar == checkName){
        return "Good Name";
    }
    else{
        return "Bad Name";
    }
}

console.log(checkName(["salman"]));