const { shortest_sequence, next_positions } = require('knights-travails');

describe('shortest_sequence', () => {
    it('returns the ending position when start and end are identical', () => {
        expect(shortest_sequence('a1', 'a1')).toEqual(['a1']);
    });

    it('returns the ending position when start and end are only move away ', () => {
        expect(shortest_sequence('d4', 'f5')).toEqual(['f5']);
        expect(shortest_sequence('e4', 'd6')).toEqual(['d6']);
    });

    it('returns the shortest sequence picking best moves clockwise', () => {
        expect(shortest_sequence('d4', 'f4')).toEqual(['e6', 'f4']);
        expect(shortest_sequence('e4', 'e2')).toEqual(['g3', 'e2']);
        expect(shortest_sequence('b2', 'f3')).toEqual(['c4', 'e5', 'f3']);
    });

    it('returns the a sequence of the same length when start and end are switched', () => {
        const chess_board = [];
        ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'].forEach(file => {
            [1, 2, 3, 4, 5, 6, 7, 8].forEach(rank => {
                chess_board.push(file + rank)
            });
        });

        chess_board.forEach(start_position => {
            chess_board.forEach(end_poition => {
                expect(
                    shortest_sequence(start_position, end_poition).length
                ).toEqual(
                    shortest_sequence(end_poition, start_position).length
                )
            });
        });
    });
});

describe('next_positions', () => {
    it('returns a set of possible moves for the knight', () => {
        expect(next_positions('a1')).toEqual([ 'b3', 'c2' ]);
        expect(next_positions('h8')).toEqual([ 'g6', 'f7' ]);
        expect(next_positions('a8')).toEqual([ 'c7', 'b6' ]);
        expect(next_positions('h1')).toEqual([ 'f2', 'g3' ]);
        expect(next_positions('d4')).toEqual([ 'e6', 'f5', 'f3', 'e2', 'c2', 'b3', 'b5', 'c6' ]);
        expect(next_positions('g5')).toEqual([ 'h7', 'h3', 'f3', 'e4', 'e6', 'f7' ]);
    });
});
