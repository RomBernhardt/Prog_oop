// person.js

class Person {
    #name;
    #weight; // kilogrammides
    #height; // meetrites

    constructor(name, weight, height) {
        this.#name = name;
        this.setWeight(weight);
        this.setHeight(height);
    }

    setWeight(weight) {
        if (typeof weight !== "number" || weight <= 0) {
            console.log("Vigane kaal! Kaal peab olema positiivne number (kg).");
            return;
        }
        this.#weight = weight;
    }

    setHeight(height) {
        if (typeof height !== "number" || height <= 0) {
            console.log("Vigane pikkus! Pikkus peab olema positiivne number (m).");
            return;
        }
        this.#height = height;
    }

    getWeight() {
        return this.#weight;
    }

    getHeight() {
        return this.#height;
    }

    // BMI arvutus
    bmi() {
        if (!this.#weight || !this.#height) {
            console.log("BMI arvutamiseks on vaja korrektseid kaalu ja pikkuse väärtusi.");
            return null;
        }

        const bmiValue = this.#weight / (this.#height * this.#height);
        return Number(bmiValue.toFixed(2)); // ümardame 2 komakohani
    }

    printInfo() {
        console.log(`${this.#name}: kaal = ${this.#weight} kg, pikkus = ${this.#height} m, BMI = ${this.bmi()}`);
    }
}

// Ekspordi, kui vaja kasutada mujal
module.exports = Person;
