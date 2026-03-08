let test = 'test'
    
function chkNumType(number){
    if(number >0) {
        console.log("The Number " +number+ " is a positive number")
    }
    else if(number <0) {
        console.log("The Number " +number+ " is a Negative number")
    }else if(number  == 0){
        console.log("The Number " +number+ " is a Zero")
    }
    else{
        console.log("The entered value " +number+ " is not a number")
    }
   
}
chkNumType(test)


// function tocheck(result){
//     if(number >0){
//         return "positive"
//     }
//     else if (number <0){
//         return "negative"
//     }
//     else if (number == 0){
//         return "zero"
//     }else{
//         return "not a number"
//     }
// }

// let number = -23
// let res = tocheck(number)
// console.log("Entered value is: " +res)