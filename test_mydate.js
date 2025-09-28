const MyDate = require("./mydate");

const d1 = new MyDate(1, 1, 2020);
const d2 = new MyDate(2, 1, 2020);

console.log("d1:", d1.printDay()); // 1.1.2020
console.log("d2:", d2.printDay()); // 2.1.2020

console.log("Kas d1 on varem kui d2?", d1.earlier(d2)); // true
console.log("Kas d2 on varem kui d1?", d2.earlier(d1)); // false

// Vale kuupäev
const d3 = new MyDate(31, 2, 2020); // Veebruaris pole 31 päeva
