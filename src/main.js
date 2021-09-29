const { shortest_sequence, file_and_rank_from_notation } = require('./knights-travails');
const { Chess } = require('chess.js');

const start = process.argv[2];
const end = process.argv[3];

if (!start || !end) {
    console.log('Please, provide a starting and an ending position');
    process.exit(1);
}

if (!valid(start) || !valid(end)) {
    console.log('Please, provide valid start and ending positions');
    process.exit(2);
}

const sequence = shortest_sequence(start, end);
console.log('Starting from:', start);
console.log('The shortest sequence is:', sequence.join(' '));

const chess = new Chess();
chess.clear();
chess.put({ type: 'n', color: 'w' }, start);
sequence.forEach(position => chess.put({ type: 'n', color: 'w' }, position));
console.log(chess.ascii());

function valid(position) {
    const [ file, rank ] = file_and_rank_from_notation(position);
    return (
        (position.length === 2) &&
        (file >= 1) &&
        (file <= 8) &&
        (rank >= 1) &&
        (rank <= 8)
    );
}
