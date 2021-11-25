async function students() {
    const url = 'http://localhost:3030/jsonstore/collections/students';

    const response = await fetch(url);

    if (!response.ok) {
        const error = await response.json();
        return alert(error.message);
    }

    const data = await response.json();

    Object.values(data).forEach(element => {
        const firstName = element.firstName;
        const lastName = element.lastName;
        const facultyNumber = Number(element.facultyNumber);
        const grade = Number(element.grade).toFixed(2);

        createRowInTable(firstName, lastName, facultyNumber, grade);

    });

    const submitBtn = document.querySelector('#form');
    submitBtn.addEventListener('submit', onSubmitClick);

    async function onSubmitClick(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const firstName = formData.get('firstName');
        const lastName = formData.get('lastName');
        const facultyNumber = formData.get('facultyNumber');
        const grade = formData.get('grade');

        if (isNaN(grade) || isNaN(facultyNumber)) {
            alert('Grade and Faculty Number must be a Number');
            return;
        }

        if (firstName == '' || lastName == '' ||
            facultyNumber == '' || grade == '') {

            alert('All fields are required!');
            return;
        }

        const response = await fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                facultyNumber: facultyNumber,
                grade: Number(grade).toFixed(2)
            })
        });

        if (!response.ok) {
            const error = await response.json;
            alert(error.message);
            return;
        }

        createRowInTable(firstName, lastName, facultyNumber, grade);

        const inputField = Array.from(ev.target);
        inputField.forEach(e => e.value = '');
    }
}

//create row in table:
function createRowInTable(firstName, lastName, facultyNumber, grade) {

    const table = document.querySelector('tbody');
    const tr = document.createElement('tr');

    const firstNameCell = tr.insertCell(0);
    firstNameCell.innerText = firstName;

    const lastNameCell = tr.insertCell(1);
    lastNameCell.innerText = lastName;

    const facultyNumberCell = tr.insertCell(2);
    facultyNumberCell.innerText = facultyNumber;

    const gradeCell = tr.insertCell(3);
    gradeCell.innerText = grade;

    table.appendChild(tr);
}

students();