const { shortest_sequence, file_and_rank_from_notation } = require('./knights-travails');

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

console.log('The shortest sequence is:', shortest_sequence(start, end).join(' '));

function valid(position) {
    const [ file, rank ] = file_and_rank_from_notation(position);
    return (
        (file >= 1) &&
        (file <= 8) &&
        (rank >= 1) &&
        (rank <= 8)
    );
}
