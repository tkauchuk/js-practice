// for (let i = 1; i <= 100; i += 1) {
//     console.log(i);
// }
// for (let i = 50; i <= 100; i += 5) {
//     console.log(i);
// }
// for (let i = 100; i >= 50; i -= 5) {
//     console.log(i);
// }

const employees = 5;
const minSalary = 500;
const maxSalary = 5000;
let totalSalary = 0;
for (let i = 1; i <= employees; i += 1) {
    const salary = Math.round(Math.random() * (maxSalary - minSalary) + minSalary);
    console.log(`Зарплата работника №${i}: ${salary}`);
    totalSalary += salary;
}
console.log(totalSalary);

const min = 0;
const max = 100;
let total = 0;

for (let i = min; i <= max; i += 1) {
    if (i % 2 === 0) {
        console.log(i);
        total += i;
    }
}
console.log('Всего:', total);