class Cow {
  static NAMES = [
    "Anu", "Arpa", "Essi", "Heluna", "Hely",
    "Hento", "Hilke", "Hilsu", "Hymy", "Ihq", "Ilme", "Ilo",
    "Jaana", "Jami", "Jatta", "Laku", "Liekki",
    "Mainikki", "Mella", "Mimmi", "Naatti",
    "Nina", "Nyytti", "Papu", "Pullukka", "Pulu",
    "Rima", "Soma", "Sylkki", "Valpu", "Virpi"
  ];

  constructor(name) {
    this.name = name || Cow.NAMES[Math.floor(Math.random() * Cow.NAMES.length)];
    this.capacity = Math.floor(Math.random() * (40 - 15 + 1)) + 15; // 15–40 L
    this.amount = 0; // piimavaru alguses
  }

  getName() {
    return this.name;
  }

  getCapacity() {
    return this.capacity;
  }

  getAmount() {
    return this.amount;
  }

  liveHour() {
    const growth = (Math.random() * (2.0 - 0.7)) + 0.7;
    this.amount = Math.min(this.capacity, this.amount + growth);
  }

  milk() {
    const milked = this.amount;
    this.amount = 0;
    return milked;
  }

  print() {
    console.log(
      `${this.name} ${this.amount.toFixed(1)}/${this.capacity.toFixed(1)}`
    );
  }
}

// --- Test Cow ---
let cow = new Cow();
cow.print();

cow.liveHour();
cow.liveHour();
cow.liveHour();
cow.liveHour();
cow.print();

cow.milk();
cow.print();
console.log("");

cow = new Cow("Ammu");
cow.print();
cow.liveHour();
cow.liveHour();
cow.print();
cow.milk();
cow.print();
