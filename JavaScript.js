

const zero = document.querySelector('#Zero'); 
const one = document.querySelector('#One'); 
const two = document.querySelector('#Two'); 
const three = document.querySelector('#Three'); 
const four = document.querySelector('#Four'); 
const five = document.querySelector('#Five'); 
const six = document.querySelector('#Six'); 
const seven = document.querySelector('#Seven'); 
const eight = document.querySelector('#Eight'); 
const nine = document.querySelector('#Nine'); 
const plus = document.querySelector('#Plus'); 
const minus = document.querySelector('#Minus'); 
const multiply = document.querySelector('#Multiply'); 
const divide = document.querySelector('#Divide'); 
const clear = document.querySelector('#C'); 
const equals = document.querySelector('#Equals'); 
const display = document.querySelector('#Display'); 

let value = [];
//let currentValue = "";
  let inputString = ""; 

  zero.addEventListener('click', function (e) {
    DisplayValue(0);
  }); 

one.addEventListener('click', function (e) {
    DisplayValue(1);
  }); 

two.addEventListener('click', function (e) {
    DisplayValue(2);
  }); 

three.addEventListener('click', function (e) {
    DisplayValue(3);
  }); 

four.addEventListener('click', function (e) {
    DisplayValue(4);
  }); 

five.addEventListener('click', function (e) {
    DisplayValue(5);
  }); 

six.addEventListener('click', function (e) {
    DisplayValue(6);
  }); 

seven.addEventListener('click', function (e) {
    DisplayValue(7);
  }); 

  eight.addEventListener('click', function (e) {
    DisplayValue(8);
  }); 

  nine.addEventListener('click', function (e) {
    DisplayValue(9);
  }); 

  plus.addEventListener('click', function (e) { 
 
    DisplayValue("+"); 

  }); 

  minus.addEventListener('click', function (e) {
    DisplayValue("-");
  }); 

  multiply.addEventListener('click', function (e) {
    DisplayValue("*");
  }); 

  divide.addEventListener('click', function (e) {
    DisplayValue("/");
  }); 

  clear.addEventListener('click', function (e) {   
    display.textContent = ""; 
    value = []; 
  }); 

  equals.addEventListener('click', function (e) { 
    value.push(inputString);
    Evaluate(); 
    inputString = "";
    //display.textContent = Evaluate();
  }); 


function Evaluate() { 


    if(value.length == 3) { 
        let result = Operate(value[0], value[1], value[2]); 
        value = []; 
        value.push(result); 
        display.textContent = result; 



}

}











function DisplayValue(input){ 
  

if(value.length == 1 && input !== '+' && input !== '-' && input !== '*' && input !== '/') {

  return alert("You need to select an operator"); 

} else if(value.length == 2 && input == '+' && inputString == "" || value.length == 2 && input == '-' && inputString == "" || value.length == 2 && input == '*' && inputString == ""|| value.length == 2 && input == '/' && inputString == "") {


  return alert("You need to select a number"); 

} else if(value.length == 0 && input == '+' && inputString == "" || value.length == 0 && input == '-' && inputString == "" || value.length == 0 && input == '*' && inputString == ""|| value.length == 0 && input == '/' && inputString == "") {


  return alert("You need to select a number"); 

}


  
  switch(input){ 
    case "+": 
    if(inputString != "") {
       value.push(inputString);      
    } 
      Evaluate();
      value.push("+"); 
      inputString = ""; 
      break;
    case "-": 
    if(inputString != "") { 
        value.push(inputString);       
    } 
      Evaluate();
      value.push("-"); 
      inputString = ""; 
      break;
    case "*": 
    if(inputString != "") {
      value.push(inputString);       
    }
      Evaluate();
      value.push("*"); 
      inputString = ""; 
      break;
    case "/": 
    if(inputString != "") {
      value.push(inputString);       
    }
      Evaluate();
      value.push("/"); 
      inputString = "";
      break;

  } 

  if(input !== '+' && input !== '-' && input !== '*' && input !== '/'){ 

   inputString += input;  

  }

  
  

        //currentValue += input; 
         display.textContent += input;  





}




function Add(number1, number2){ 
    return Number(number1) + Number(number2);
}

function Subtract(number1, number2){ 
  return Number(number1) - Number(number2);
} 

function Multiply(number1, number2){ 
  return Number(number1) * Number(number2);
} 

function Divide(number1, number2){ 
  return Number(number1) / Number(number2);
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