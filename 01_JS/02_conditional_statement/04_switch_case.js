// fall through condition in switch case
// when to use if-else and switch ?    

// Q1
let day = 3
switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;

    default:console.log("Weekend")
        break;
}


// Q2   fall through situation in switch case.
let day1 = 1
switch (day1) {
    case 1:
        console.log("Monday")
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;

    default:console.log("Weekend")
        break;
}
// output: Monday Tuesday

// --------------------------------------------
let day2 = 4
switch (day2) {
    case 1:
    case 2:
    case 3:
        console.log("monday")
        break;
    case 4:
    case 5:
    case 6:
        console.log("Wednesday")
        break;
    default:console.log("Weekend")
}

//for the  value of 1,2,3 we will get monday and not invalid for 1 and 2.
//similarly for the  value of 4,5,6 we will get wednesday and not invalid for 1 and 2.
// output : monday 




// -----------------------------------------

switch (true) {
    case 19 > 7:
        console.log("Hello");
        break;
    case 30 > 7:
        console.log("Hey");
        break;

    default:console.log("Invalid")
        break;
}

// output: Hello