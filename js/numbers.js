// const elementWidth = '25px';
// console.log(Number.parseInt(elementWidth));

// const elementHeight = '12.5px'
// console.log(Number.parseFloat(elementHeight));

// const salary = 200.234567890012;
// console.log(Number(salary.toFixed(5)));

// const invalidNumber = Number('qwerty');
// console.log(Number.isNaN(invalidNumber));

// const validNumber = Number('21');
// console.log(Number.isNaN(validNumber));

// // floating points 

// const x = 0.1;
// const y = 0.2;

// console.log((x * 10 + y * 10) / 10);

// // Math

// const base = 2;
// const power = 3;

// console.log(Math.pow(base, power));

// console.log(2 ** 3);

// const messageBase = prompt('Введите число!');
// const responseBase = Number(messageBase);
// const messagePower = prompt('Введите степень!');
// const responsePower = Number(messagePower);

// console.log(Math.pow(responseBase, responsePower));

// let messageBase = prompt('Enter a number!');
// messageBase = Number(messageBase);

// console.log(messageBase);

// let messageExponent = prompt('Enter an exponent!');
// messageExponent = Number(messageExponent);

// console.log(messageExponent);

// const result = messageBase ** messageExponent;

// console.log(result);
const max = 30;
const min = 15;
const randomNumber = Math.round(Math.random() * (max - min) + min);
console.log(randomNumber);