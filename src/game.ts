export class Game {
    private rolls: number[] = Array(21).fill(0);
    private currentRoll: number = 0;


    score(): number {
        let score = 0;
        let i = 0;
        for (let frame = 0; frame < 10; frame += 1) {
            score += this.rolls[i] + this.rolls[i + 1];
            i += 2;
        }
        return score;
    }

    roll(pins: number): void {
        this.rolls[this.currentRoll] = pins;
        this.currentRoll += 1;
    }

}
