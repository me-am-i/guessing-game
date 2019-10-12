class GuessingGame {
    constructor() {}

    setRange(min, max) { // диапазон
        this.min = min;
        this.max = max;
    }

    guess() { // угадываем
        this.number = Math.round((this.min + this.max)  / 2);
        return this.number;
    }

    lower() { // если промахнулись
        this.max = this.number;
        return this.max;
    }

    greater() {
        this.min = this.number;
        return this.min;
    }
}

module.exports = GuessingGame;
