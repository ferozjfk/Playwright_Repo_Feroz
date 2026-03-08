

function launchBrowser(browsername){

    if(browsername == "Chrome"){
        console.log("Selected Browser is : " +browsername)
    }
    
    else if(browsername == "Edge") {
        console.log("Selected Browser is : " +browsername)
    }
    else{
        console.log("Selected Browser is : Default browser" )
    }
}
let browser = "IE"  
launchBrowser(browser)


function runTests(testType){
    
    switch(testType){

        case "Smoke": 
            console.log("Test type is :" +testType)
            break;

        case "Sanity":
            console.log("Test type is :" +testType)
            break;

        case "Regression"            :
            console.log("Test type is :" +testType)
            break;

        default:
            console.log("Test type is : Default" )
            break;
    }
}

runTests("Regression")
runTests("Sanity")
runTests("Smoke")
runTests("safari")