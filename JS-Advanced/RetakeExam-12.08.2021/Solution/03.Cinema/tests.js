const { expect } = require('chai');
const cinema = require('./cinema');

describe("Tests", function() {

    describe("Show Movies", function() {
        it("Return available movies in the cinema ", function() {
            const moviesArr = ['King Kong', 'The Tomorrow War', 'Joker'];
            expect(cinema.showMovies(moviesArr)).to.equal(moviesArr.join(', '));
        });

        it("Return message when movieArr is empty ", function() {
            const moviesArr = [];
            expect(cinema.showMovies(moviesArr)).to.equal('There are currently no movies to show.');
        });
    });

    describe("Ticket Price", function() {
        it("Return price with given valid projectionType ", function() {
            const shedule = {
                "Premiere": 12.00,
                "Normal": 7.50,
                "Discount": 5.50
            }
            expect(cinema.ticketPrice('Premiere')).to.equal(12);
            expect(cinema.ticketPrice('Normal')).to.equal(7.50);
            expect(cinema.ticketPrice('Discount')).to.equal(5.50);
        });

        it("Return price with given invalid projectionType ", function() {
            const shedule = {
                "Premiere": 12.00,
                "Normal": 7.50,
                "Discount": 5.50
            }
            expect(() => { cinema.ticketPrice('Super') }).to.throw();
            expect(() => { cinema.ticketPrice({}) }).to.throw();
            expect(() => { cinema.ticketPrice('') }).to.throw();
        });
    });

    describe("Swar Seats In Hall", function() {
        it("Return message when seats are not integers", function() {
            expect(cinema.swapSeatsInHall('someSeat', {})).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('', 'secondSeat')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(2, 'secondSeat')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('firstSeat', 'secondDeat')).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall('firstSeat', 10)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it("Return message when seats are negative integers or zero", function() {
            expect(cinema.swapSeatsInHall(0, 20)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-2, 10)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(15, -20)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20, 0)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(-5, -2)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it("Return message when seats are integers, but bigger then 20", function() {
            expect(cinema.swapSeatsInHall(10, 60)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(100, 5)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(25, 27)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it("Return message when seats are integers, but they are equal", function() {
            expect(cinema.swapSeatsInHall(15, 15)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20, 20)).to.equal('Unsuccessful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(5, 5)).to.equal('Unsuccessful change of seats in the hall.');
        });

        it("Work correct with valid seat numbers", function() {
            expect(cinema.swapSeatsInHall(5, 2)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(20, 10)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(3, 5)).to.equal('Successful change of seats in the hall.');
            expect(cinema.swapSeatsInHall(1, 20)).to.equal('Successful change of seats in the hall.');
        });
    });
});