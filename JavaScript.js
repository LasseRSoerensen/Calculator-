function Add(number1, number2){ 
    return number1 + number2;
}

function Subtract(number1, number2){ 
    return number1 - number2;
} 

function Multiply(number1, number2){ 
    return number1 * number2;
} 

function Divide(number1, number2){ 
    return number1 / number2;
} 

function Operate(number1, operater, number2){ 

    let result; 

 /*   if (operater == "+") {
        result = Add(number1, number2); 
    } else if (operater == "-") {
        result = Subtract(number1, number2);
    } else if (operater == "*") {
        result = Multiply(number1, number2); 
    } else if (operater == "/") {
        
    } */ 
    
    switch(operater){ 
        case "+": 
        result = Add(number1, number2); 
        break; 
        case "-": 
        result = Subtract(number1, number2); 
        break; 
        case "*": 
        result = Multiply(number1, number2); 
        break; 
        case "/": 
        result = Divide(number1, number2); 
        break; 
    } 

    return result;

}