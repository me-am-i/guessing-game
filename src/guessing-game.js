class GuessingGame {
    constructor() {}

    setRange(min, max) { // диапазон
        this.min = min;
        this.max = max;
    }

    guess() { // угадываем
        this.number = (this.min + this.max) / 2 ;
        return Math.round(this.number);
    }

    lower() { // если промахнулись
        this.max = this.number - 1;
        return this.min;
    }

    greater() {
        this.min = this.number + 1;
        return this.max;
    }
}

module.exports = GuessingGame;
