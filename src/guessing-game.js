class GuessingGame {
    // 1. 0 - 4048
    // 2. 0 - 2024 - 4048
    // 3. 0 - 1012 - 2024
    // 4. 0 - 506 - 1012
    // 5. 0 - 253 - 506
    // 6. 253 - 506 ( (0 - 506-253) / 2 )

    constructor() {}

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    // [this.min..this.max]

    guess() {
      this.g = this.min + Math.ceil((this.max - this.min) / 2);
      return this.g;
    }

    lower() {
      this.max = this.g;
    }

    greater() {
      this.min = this.g;
    }
}

module.exports = GuessingGame;
