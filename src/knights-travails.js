function shortest_sequence(start, end) {
    const visited_positions = new Set([start]);
    let done = start === end;
    let shortest = [ end ];

    let sequences = [ [ start ] ];
    while (!done) {
        const next_sequences = [];
        sequences.forEach(sequence => {
            if (done) return;

            const current_position = sequence[sequence.length-1];
            next_positions(current_position).forEach(position => {
                if (done) {
                    return;
                }
                else if (position === end) {
                    shortest = sequence.slice(1).concat(end);
                    done = true;
                } else if (!visited_positions.has(position)) {
                    visited_positions.add(position);
                    next_sequences.push(sequence.concat(position));
                }
            });
        });
        sequences = next_sequences;
    }

    return shortest;
}

function next_positions(current_position) {
    const [ file, rank ] = file_and_rank_from_notation(current_position);
    const new_positions = [];

    // d4     d4      d4       d4       d4        d4        d4       d4
    // e6     f5      f3       e2       c2        b3        b5       c6
    [ [1, 2], [2, 1], [2, -1], [1, -2], [-1, -2], [-2, -1], [-2, 1], [-1, 2] ].forEach(position_delta => {
        const new_file = file + position_delta[0];
        const new_rank = rank + position_delta[1];
        if ((new_file >= 1) && (new_file <= 8) && (new_rank >= 1) && (new_rank <=8)) {
            new_positions.push(file_and_rank_to_notation(new_file, new_rank));
        }
    });

    return new_positions;
}

function file_and_rank_from_notation(position) {
    const file = position.charCodeAt(0) - 96;
    const rank = Number(position.charAt(1));
    return [ file, rank ];
}

function file_and_rank_to_notation(file, rank) {
    return String.fromCharCode(file + 96) + String(rank);
}

module.exports = { shortest_sequence, next_positions, file_and_rank_from_notation };
