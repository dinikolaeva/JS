class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {

        if ([username, salary, position, department].some(a => !a)) {
            throw new Error('Invalid input!');
        }

        if (salary < 0) {
            throw new Error('Invalid input!');
        }

        let currEmployee = {
            username,
            salary,
            position
        }

        if (!this.departments.some(d => d.name == department)) {

            let newDepart = {
                name: department,
                employees: [],
                totalSalary: 0
            }

            this.departments.push(newDepart);
        }

        this.departments.forEach(d => {

            if (d.name === department) {
                d.employees.push(currEmployee);
                d.totalSalary += salary;
            }
        })
        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {

        let bestAverrageSalary = 0;
        let bestDepartment = undefined;

        this.departments.forEach(d => {
            d.averageSalary = d.totalSalary / d.employees.length;

            if (d.averageSalary > bestAverrageSalary) {
                bestAverrageSalary = d.averageSalary;
                bestDepartment = d;
            }
        });

        let bestEmployees = bestDepartment.employees
            .sort((a, b) => b.salary - a.salary || a.username.localeCompare(b.username))
            .map(e => `${e.username} ${e.salary} ${e.position}`)
            .join('\n');

        return `Best Department is: ${bestDepartment.name}\nAverage salary: ${bestAverrageSalary.toFixed(2)}\n${bestEmployees}`;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

c.addEmployee("Stanimir", 2000, "engineer", "Human resources");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());