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


let day2 = 1
switch (day2) {
    case 1:console.log("monday")
    case 2:
    case 3:
        break;
    case 4:
    case 5:
    case 6:
        console.log("Wednesday")
        break;
    default:console.log("Weekend")
        break;
}

// output : 