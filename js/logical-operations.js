const min = 10;
const max = 50;
const number = 30;

console.log(number < min || number > max);
console.log(number > min && number < max);

const isOnline = true;
const isFriend = true;
const isDnd = false;

const openChat = isOnline && isFriend && !isDnd;
console.log('Can I open a chat?', openChat);

