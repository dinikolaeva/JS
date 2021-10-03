function printDeckOfCards(cards) {

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


        if (!validFaces.includes(face) || !Object.keys(validSuit).includes(suit)) {
            throw new Error;
        }

        return {
            face,
            suit,
            toString() {
                return `${face}${validSuit[suit]}`;
            }
        }
    }

    let deck = cards.reduce((acc, currCard) => {
        let face = currCard.slice(0, -1);
        let suit = currCard.slice(-1);

        try {

            let card = createCards(face, suit);
            return acc += ' ' + card;

        } catch (err) {
            console.log(`Invalid card: ${currCard}`)
        }
    }, '');

    return deck;
}

console.log(printDeckOfCards(['AS', '10D', 'KH', '2C']));
console.log(printDeckOfCards(['5S', '3D', 'QD', '1C']));