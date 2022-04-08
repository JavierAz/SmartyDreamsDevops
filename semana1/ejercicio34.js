const operaciones = (num1, num2) => {
    let res = `
        Suma: ${num1+num2}
        Resta: ${num1-num2}
        Prod: ${num1*num2}
        Division: ${num1/num2}
    `;

    return res;
}

console.log(operaciones(10,5))