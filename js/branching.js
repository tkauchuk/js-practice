const salary = 700;
if (salary < 500) {
    console.log('First Level')
} else if (salary > 500 && salary < 1000) {
    console.log('Second level');
} else if (salary >= 1000) {
    console.log('Third Level');
}

// const balance = 0;
// const response = balance > 0 ? 'Позитивный баланс' : 'Негативный баланс';
// console.log(response);


let balance = 10000;
const payment = 20000;

alert(`Общая стоимость заказа ${payment} кредитов. Проверяем кол-во доступных средств на счету.`);
if (payment <= balance) {
    balance -= payment;
    alert(`На счету осталось ${balance} кредитов`);
} else {
    alert(`На счету недостаточно средств для проведения операции!`);
}
alert(`Операция завершена!`);