function calculate() {
    let operator = document.getElementById("operator").value;
    let= firstNumber = document.getElementById("firstNumber").value;
    let secondNumber = document.getElementById("secondNumber").value;
    
    let result = document.getElementById("answer");

    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);

    if(operator == "+") result.innerHTML = firstNumber + secondNumber;
    else if (operator == "-") result.innerHTML = firstNumber - secondNumber;
    else if (operator == "*") result.innerHTML = firstNumber * secondNumber;
    else if (operator == "/")  result.innerHTML = firstNumber / secondNumber;
}

