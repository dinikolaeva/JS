async function lockedProfile() {

    const mainElement = document.getElementById('main');

    let div = document.querySelector('.profile');
    div.remove();

    try {
        const url = 'http://localhost:3030/jsonstore/advanced/profiles';
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            throw new Error('Error');
        }

        Object.keys(data).forEach((key, index) => {

            let el = data[key];

            let divProfile = e('div', { className: 'profile' });

            let img = e('img', { src: './iconProfile2.png' });
            img.classList.add('userIcon');

            let label = e('label', {}, 'Lock');
            label.checked = true;

            let input = e('input', { type: 'radio' });
            input.name = `user${index+1}Locked`;
            input.value = 'lock';
            input.checked = true;

            let label2 = e('label', {}, 'Unlock');

            let input2 = e('input', { type: 'radio' });
            input2.name = `user${index+1}Locked`;
            input2.value = 'unlock';

            let br = document.createElement('br');
            let hr = document.createElement('hr');

            let label3 = e('label', {}, 'Username');

            let input3 = e('input', { type: 'text' });
            input3.name = `user${index+1}Username`;
            input3.value = el.username;
            input3.disabled = true;
            input3.readonly = true;

            let hidenFieldsDiv = document.createElement('div');
            hidenFieldsDiv.id = `user${index+1}HiddenFields`;

            let hidenHr = document.createElement('hr');

            let email = e('label', {}, 'Email:');

            let emailInput = e('input', { type: 'email' });
            emailInput.name = `user${index+1}Email`;
            emailInput.value = el.email;
            emailInput.disabled = true;
            emailInput.readonly = true;

            let label4 = e('label', {}, 'Age:');

            let ageInput = e('input', { type: 'email' });
            ageInput.name = `user${index+1}Age`;
            ageInput.value = el.age;
            ageInput.disabled = true;
            ageInput.readonly = true;


            hidenFieldsDiv.appendChild(hidenHr);
            hidenFieldsDiv.appendChild(email);
            hidenFieldsDiv.appendChild(emailInput);
            hidenFieldsDiv.appendChild(label4);
            hidenFieldsDiv.appendChild(ageInput);

            hidenFieldsDiv.style.display = 'none';

            divProfile.appendChild(img);
            divProfile.appendChild(label);
            divProfile.appendChild(input);
            divProfile.appendChild(label2);
            divProfile.appendChild(input2);
            divProfile.appendChild(br);
            divProfile.appendChild(hr);
            divProfile.appendChild(label3);
            divProfile.appendChild(input3);
            divProfile.appendChild(hidenFieldsDiv);

            let showMoreBtn = e('button', {}, 'Show more');
            divProfile.appendChild(showMoreBtn);
            mainElement.appendChild(divProfile);
        });


        let showMoreBtns = [...document.getElementsByTagName('button')];
        showMoreBtns.forEach(e => e.addEventListener('click', onClick));

        function onClick(ev) {
            let inputLockElement = ev.target.parentNode;
            let hidenElement = inputLockElement.getElementsByTagName('div')[0];
            let lockedCheck = inputLockElement.getElementsByTagName('input')[0];
            let btn = ev.target;

            if (!lockedCheck.checked) {

                if (btn.textContent == 'Show more') {
                    hidenElement.style.display = 'block';
                    btn.textContent = 'Hide it';
                } else {
                    hidenElement.style.display = 'none';
                    btn.textContent = 'Show more';
                }
            }
        }
    } catch (error) {
        console.log(error.message);
    };
}

//create DOM elements: 
function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}