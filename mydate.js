// mydate.js

class MyDate {
    #day;
    #month;
    #year;

    constructor(day, month, year) {
        this.#day = day;
        this.#month = month;
        this.#year = year;

        if (!this.isValid()) {
            console.log("Vigane kuupäev: " + day + "." + month + "." + year);
        }
    }

    // Kontrollib, kas päev, kuu ja aasta on sobivad
    isValid() {
        if (!Number.isInteger(this.#day) || !Number.isInteger(this.#month) || !Number.isInteger(this.#year)) {
            console.log("Päev, kuu ja aasta peavad olema täisarvud.");
            return false;
        }

        if (this.#month < 1 || this.#month > 12) {
            console.log("Kuu peab olema vahemikus 1–12.");
            return false;
        }

        const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const maxDay = daysInMonth[this.#month - 1];

        if (this.#day < 1 || this.#day > maxDay) {
            console.log(`Kuul ${this.#month} võib olla 1 kuni ${maxDay} päeva.`);
            return false;
        }

        return true;
    }

    // Tagastab kuupäeva kujul päev.kuu.aasta
    printDay() {
        return `${this.#day}.${this.#month}.${this.#year}`;
    }

    // Tagastab true, kui see kuupäev on varasem kui compared
    earlier(compared) {
        if (!(compared instanceof MyDate)) {
            throw new Error("Võrdluseks peab kasutama MyDate objekti.");
        }

        if (this.#year !== compared.#year) {
            return this.#year < compared.#year;
        }
        if (this.#month !== compared.#month) {
            return this.#month < compared.#month;
        }
        return this.#day < compared.#day;
    }
}

// Ekspordi klass, kui vaja kasutada mujal
module.exports = MyDate;
