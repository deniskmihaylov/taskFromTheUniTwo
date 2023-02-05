function calculator (num1, sign, num2) {
    let sum = 0
    switch (sign) {
        case '+': sum = num1 + num2; break;
        case '-': sum = num1 - num2; break;
        case '*': sum = num1 * num2; break;
        case '/': sum = num1 / num2; break;
    }
    console.log(sum.toFixed(2))
}

calculator(1, '+', 2)