var FunctionInUse = "false";
var NumOne = 0;
var NumTwo = 0;
function add(num1, num2) {
    "use strict";
    return num1 + num2;
}
function sub(num1, num2) {
    "use strict";
    return (num1 - num2);
}
function multiply(num1, num2) {
    "use strict";
    return num1 * num2;
}
function divide(num1, num2) {
    "use strict";
    return num1 / num2;
}
function modu(num1, num2) {
    "use strict";
    return num1 % num2;
}
function myClear() {
    "use strict";
    FunctionInUse = "false";
    NumOne = 0;
    NumTwo = 0;
    document.getElementById("display").innerHTML = 0;
}
function IntPressed(Button) {
    "use strict";
    if (FunctionInUse === "false") {
        NumOne = NumOne * 10 + Button;
        document.getElementById("display").innerHTML = NumOne;
    } else {
        NumTwo = NumTwo * 10 + Button;
        document.getElementById("display").innerHTML = NumTwo;
    }
    return "Done";
}
function operatorPressed(Operator) {
    "use strict";
    if (FunctionInUse !== "false") {
        switch (FunctionInUse) {
        case "Add":
            NumOne = add(NumOne, NumTwo);
            break;
        case "Sub":
            NumOne = sub(NumOne, NumTwo);
            break;
        case "Mult":
            NumOne = multiply(NumOne, NumTwo);
            break;
        case "Div":
            NumOne = divide(NumOne, NumTwo);
            break;
        case "Mod":
            NumOne = modu(NumOne, NumTwo);
            break;
        }
        NumTwo = 0;
        document.getElementById("display").innerHTML = NumOne;
        FunctionInUse = Operator;
        if (Operator === "=") {
            FunctionInUse = "false";
        }
    } else {
        if (Operator === "=") {
            document.getElementById("display").innerHTML = NumOne;
        } else {
            FunctionInUse = Operator;
        }
    }
    return ("Done");
}
function OpToJava(Raw) {
    "use strict";
    switch (Raw) {
    case 1:
        return (operatorPressed("Mult"));
    case 2:
        return (operatorPressed("Div"));
    case 3:
        return (operatorPressed("Add"));
    case 4:
        return (operatorPressed("Sub"));
    case 5:
        return (operatorPressed("Mod"));
    case 6:
        return (operatorPressed("="));
    
    }
}