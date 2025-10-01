class BulkTank {
  constructor(capacity = 2000) {
    this.capacity = capacity;
    this.volume = 0;
  }

  getCapacity() {
    return this.capacity;
  }

  getVolume() {
    return this.volume;
  }

  howMuchFreeSpace() {
    return this.capacity - this.volume;
  }

  addToTank(amount) {
    // Lisame ainult nii palju, kui mahub
    const added = Math.min(amount, this.howMuchFreeSpace());
    this.volume += added;
  }

  getFromTank(amount) {
    // Võtame nii palju, kui olemas on
    const taken = Math.min(amount, this.volume);
    this.volume -= taken;
    return taken;
  }

  print() {
    console.log(
      `${this.volume.toFixed(1)}/${this.capacity.toFixed(1)}`
    );
  }
}

// --- Test BulkTank ---
const tank = new BulkTank();
tank.getFromTank(100);
tank.addToTank(25);
tank.getFromTank(5);
tank.print();

const tank2 = new BulkTank(50);
tank2.addToTank(100);
tank2.print();
