const { expect } = require('chai');
let { Repository } = require("./solution.js");

describe("Tests …", function() {
    describe("Repository", function() {

        beforeEach(() => {
            properties = {
                name: 'string',
                age: 'number',
                birthday: "object"
            }
            repository = new Repository(properties);
            entity = { name: 'Stamat', age: 35, birthday: new Date(1985, 05, 30) }
        })

        it("Get data.size of Map()", function() {
            repository.add(entity);
            expect(repository.data.size).to.equal(1);
        });

        it("Get count of entities)", function() {
            expect(repository.count).to.equal(0);
        });

        it("Get next Id", function() {
            repository.add(entity);
            let secondEntity = { name: "Pesho", age: 22, birthday: new Date(1998, 0, 7) };
            repository.add(secondEntity);
            expect(repository.nextId()).to.equal(2);
        });

        it("Add entity to the data with valid properties", function() {
            expect(repository.add(entity)).to.equal(0);
            let secondEntity = { name: "Pesho", age: 22, birthday: new Date(1998, 0, 7) };
            expect(repository.add(secondEntity)).to.equal(1);
        });

        it("Add entity to the data with invalid property", function() {

            let wrongEntity = { names: 'Milena', age: 30, birthday: new Date(1991, 08, 30) };
            expect(() => { repository.add(wrongEntity) }).to.throw();
        });

        it("Add entity to the data with missing property", function() {

            let missingProperty = { names: 'Milena', age: 30 };
            expect(() => { repository.add(missingProperty) }).to.throw();
        });

        it("Add entity to the data with properties of incorrect type", function() {

            let wrongEntity = { name: 30, age: 'Milena', birthday: new Date(1991, 08, 30) };
            expect(() => { repository.add(wrongEntity) }).to.throw();
        });

        it("Add empty object entity", function() {

            let nullEntity = {};
            expect(() => { repository.add(nullEntity) }).to.throw();
        });

        it("Add entity to the data with invalid birthday", function() {

            let anotherEntity = { name: 'Stamat', age: 29, birthday: 1991 };
            expect(() => { repository.add(anotherEntity) }).to.throw();
        });

        it("Returns the entity with given id", function() {

            let secondEntity = { name: "Pesho", age: 22, birthday: new Date(1998, 0, 7) };
            repository.add(entity);
            repository.add(secondEntity);
            expect(repository.getId(0)).to.equal(entity);
            expect(repository.getId(1)).to.equal(secondEntity);
        });

        it("Throws exception when the entity with given id did not exist", function() {

            repository.add(entity);
            expect(() => { repository.getId(3) }).to.throw();
            expect(() => { repository.getId(-1) }).to.throw();
        });

        it("Update entity with given id with new one", function() {

            let newEntity = { name: 'Milena', age: 30, birthday: new Date(1991, 08, 30) };
            repository.add(entity);
            repository.update(0, newEntity);
            expect(repository.getId(0)).to.equal(newEntity);
        });

        it("Throws exception when update repository when the id does not exist in the data", function() {

            let newEntity = { name: 'Milena', age: 30, birthday: new Date(1991, 08, 30) };
            expect(() => { repository.update(0, newEntity) }).to.throw();
        });

        it("Throws exception when update repository with empty entity", function() {

            let newEntity = {};
            expect(() => { repository.update(0, newEntity) }).to.throw();
        });

        it("Throws exception to update repository with missing property", function() {

            let newEntity = { name: 'Milena', age: 30 };
            repository.add(entity);
            expect(() => { repository.update(0, newEntity) }).to.throw();
        });

        it("Throws exception to update repository with invalid type of property", function() {

            let newEntity = { name: 258, age: 30, birthday: new Date(1991, 08, 30) };
            repository.add(entity);
            expect(() => { repository.update(0, newEntity) }).to.throw();
        });

        it("Throws exception to update repository with invalid name of property", function() {

            let newEntity = { names: 'Vergil', age: 30, birthday: new Date(1991, 08, 30) };
            repository.add(entity);
            expect(() => { repository.update(0, newEntity) }).to.throw();
        });

        it("Delete entity with given id", function() {

            repository.add(entity);
            let secondEntity = { name: 'Vergil', age: 30, birthday: new Date(1991, 08, 30) };
            repository.add(secondEntity);
            repository.del(1);
            expect(repository.count).to.equal(1);
            expect(repository.getId(0)).to.equal(entity);
        });

        it("Throws exception to delete entity when the id does not exist in the data", function() {

            repository.add(entity);
            expect(() => { repository.del(5) }).to.throw();
            expect(() => { repository.del(-2) }).to.throw();
        });
    });
});