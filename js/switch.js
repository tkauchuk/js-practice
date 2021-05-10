const stars = 2;
let price;

switch (stars) {
    case 1:
    case 2:
        price = 20;
        break;
    case 3:
    case 4:
        price = 40;
        break;
    case 5:
        price = 50;
        break;
    default:
        console.log('Error');
}
console.log(price);

const option = 2;
let message;

switch (option) {
    case 1:
        message = 'Вы сможете забрать товар завтра с 12:00 в нашем офисе';
        break;
    case 2:
        message = 'Курьер доставит заказ завтра с 9:00 до 18:00';
        break;
    case 3:
        message = 'Посылка будет отправлена сегодня';
        break;
    default:
        message = 'Вам перезвонит менеджер';
}
console.log(message);