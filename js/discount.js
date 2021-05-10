let totalSpent = 5000;
let payment = 600;
let discount = 0;

if (totalSpent < 100) {
    discount = 0;
    console.log('У Вас нет партнёрской скидки');
}
else if (totalSpent >= 100 && totalSpent <= 1000) {
    discount = 2;
    console.log('Бронзовый партнёр, скидка 2%');
} else if (totalSpent > 1000 && totalSpent < 5000) {
    discount = 5;
    console.log('Серебряный партнёр, скидка 5%');
} else {
    discount = 10;
    console.log('Золотой партнёр, скидка 10%');
}
payment -= payment * discount / 100;
console.log(`Оформляем заказ на сумму ${payment}`);

totalSpent += payment;
console.log(`Всего потрачено: ${totalSpent}`);