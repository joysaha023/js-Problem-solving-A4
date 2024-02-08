// const str = "hello"
// console.log(str.charAt(0).toUpperCase()+str.slice(1))

// const dob = 19943;
// if(/^\d{4}$/.test(dob)){
//     console.log("tes")
// }
// else{
//     console.log("nooooooooooo")
// }


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

// console.log(password({ name: "kolimuddin" , birthYear: 1999 , siteName: "google" }))
// console.log(password({ name: "rahat" , birthYear: 2002, siteName: "Facebook" }))
// console.log(password({ name: "toky" , birthYear: 200, siteName: "Facebook" }))
console.log(password({ name: "maisha" , birthYear: 2002 }))