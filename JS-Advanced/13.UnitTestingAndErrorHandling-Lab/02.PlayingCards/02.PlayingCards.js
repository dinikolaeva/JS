function createCards(face, suit) {

    const validFaces = [
        '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'
    ];

    const validSuit = {
        'S': '\u2660 ',
        'H': '\u2665 ',
        'D': '\u2666 ',
        'C': '\u2663 '
    }

    if (!validFaces.includes(face)) {
        throw new Error('Invalid face');
    } else if (!Object.keys(validSuit).includes(suit)) {
        throw new Error('Invalid siut');
    }

    return {
        face,
        suit,
        toString() {
            return `${face}${validSuit[suit]}`;
        }
    }
}

console.log(createCards('A', 'S'));
console.log(createCards('10', 'H'));
console.log(createCards('1', 'C'));