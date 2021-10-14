function validate() {
    let submitBtn = document.getElementById('submit');
    submitBtn.addEventListener('click', getValidator);
    let isCompanyCheck = document.getElementById('company');
    isCompanyCheck.addEventListener('change', onChangeCheckbox);

    function getValidator(e) {

        e.preventDefault();
        let isEverithingValid = true;

        let usernameInput = document.getElementById('username');
        const userRegex = new RegExp(/^[a-zA-Z0-9]{3,20}$/gm);

        if (!userRegex.test(usernameInput.value)) {
            usernameInput.style.borderColor = 'red';
            isEverithingValid = false;
        } else {
            usernameInput.style.borderColor = 'none';
        }

        let emailInput = document.getElementById('email');
        const emailRegex = new RegExp(/^.*@.*\..*$/gm);

        if (!emailRegex.test(emailInput.value)) {
            emailInput.style.borderColor = 'red';
            isEverithingValid = false;
        } else {
            emailInput.style.borderColor = 'none';
        }

        const regexforPasswords = new RegExp(/^[0-9a-zA-Z_]{5,15}$/);

        let passwordInput = document.getElementById('password');

        if (!regexforPasswords.test(passwordInput.value)) {
            passwordInput.style.borderColor = 'red';
            isEverithingValid = false;
        } else {
            passwordInput.style.borderColor = 'none';
        }

        let confirmPasswordInput = document.getElementById('confirm-password');

        if (!regexforPasswords.test(confirmPasswordInput.value)) {
            confirmPasswordInput.style.borderColor = 'red';
            isEverithingValid = false;
        } else {
            confirmPasswordInput.style.borderColor = 'none';
        }

        if (passwordInput.value != confirmPasswordInput.value) {
            passwordInput.style.borderColor = 'red';
            confirmPasswordInput.style.borderColor = 'red';
            isEverithingValid = false;
        }

        if (isCompanyCheck.checked) {

            let companyNumberInput = document.getElementById('companyNumber');
            let number = Number(companyNumberInput.value);

            if (Number.isInteger(number) && number >= 1000 && number <= 9999) {
                companyNumberInput.style.borderColor = 'none';
            } else {
                companyNumberInput.style.borderColor = 'red';
                isEverithingValid = false;
            }
        }

        let validElement = document.getElementById('valid');
        if (isEverithingValid) {
            validElement.style.display = 'block';
        } else {
            validElement.style.display = 'none';
        }
    }

    function onChangeCheckbox(ev) {
        let companyInfoElement = document.getElementById('companyInfo');
        companyInfoElement.style.display = ev.target.checked ? 'block' : 'none';
    }

}