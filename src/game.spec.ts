import { Game } from "./game";

let g: Game = new Game();

beforeEach(() => {
    g = new Game();
});

describe('Bowling game', () => {
    test('should score 0 for "gutter game"', () => {
        rollMany(20, 0);
        expect(g.score()).toBe(0);
    });

    test('should score 20 for "all ones game"', () => {
        rollMany(20, 1);
        expect(g.score()).toBe(20);
    });

    test('should score 16 with a "spare" followed by a 3 ball', () => {
        rollSpare();
        g.roll(3);
        expect(g.score()).toBe(16);
    });

    test('should score 24 for a "strike" followed by a 3 and 4 balls', () => {
        rollStrike();
        g.roll(3);
        g.roll(4);
        expect(g.score()).toBe(24);
    });

    function rollStrike(): void {
        g.roll(10);
    }

    function rollSpare(): void {
        g.roll(5);
        g.roll(5);
    }

    function rollMany(n: number, pins: number): void {
        for (let i = 0; i < n; i += 1) {
            g.roll(pins);
        }
    }
});
