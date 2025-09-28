const Person = require("./person");

const p1 = new Person("Mari", 65, 1.70);
p1.printInfo(); // Mari: kaal = 65 kg, pikkus = 1.7 m, BMI = 22.49

const p2 = new Person("Jüri", 90, 1.80);
console.log("Jüri BMI:", p2.bmi()); // 27.78

// Vigased andmed
const p3 = new Person("Kati", -55, 1.65); // Vigane kaal!
p3.setHeight(0); // Vigane pikkus!
