window.addEventListener('load', solution);

function solution() {

    let submitBtn = document.getElementById('submitBTN');
    submitBtn.addEventListener('click', onClickSubmit);

    let editBtn = document.getElementById('editBTN');
    editBtn.addEventListener('click', onClickEdit)

    let continueBtn = document.getElementById('continueBTN');
    continueBtn.addEventListener('click', onClickContinue);

    function onClickSubmit(ev) {

        ev.preventDefault()
        let fullName = document.getElementById('fname').value;
        let email = document.getElementById('email').value;
        let phoneNumber = document.getElementById('phone').value;
        let address = document.getElementById('address').value;
        let postalCode = document.getElementById('code').value;

        if (fullName != '' && email != '') {

            let ulElement = document.getElementById('infoPreview');

            let liName = document.createElement('li');
            liName.textContent = `Full Name: ${fullName}`
            let liEmail = document.createElement('li');
            liEmail.textContent = `Email: ${email}`;
            let liPhoneNumber = document.createElement('li');
            liPhoneNumber.textContent = `Phone Number: ${phoneNumber}`;
            let liAddress = document.createElement('li');
            liAddress.textContent = `Address: ${address}`;
            let liPostalCode = document.createElement('li');
            liPostalCode.textContent = `Postal Code: ${postalCode}`;

            ulElement.appendChild(liName);
            ulElement.appendChild(liEmail);
            ulElement.appendChild(liPhoneNumber);
            ulElement.appendChild(liAddress);
            ulElement.appendChild(liPostalCode);

            submitBtn.disabled = true;
            editBtn.disabled = false;
            continueBtn.disabled = false;

            fullName.value = '';
            email.value = '';
            phoneNumber.value = '';
            address.value = '';
            postalCode.value = '';

        }
    }

    function onClickEdit() {

        let liName = document.querySelector('#infoPreview > li:nth-child(1)').textContent.slice(11);
        let liMail = document.querySelector('#infoPreview > li:nth-child(2)').textContent.slice(7);
        let liPhone = document.querySelector('#infoPreview > li:nth-child(3)').textContent.slice(14);
        let liAddress = document.querySelector('#infoPreview > li:nth-child(4)').textContent.slice(9);
        let liCode = document.querySelector('#infoPreview > li:nth-child(5)').textContent.slice(13);

        document.getElementById('fname').value = liName;
        document.getElementById('email').value = liMail;
        document.getElementById('phone').value = liPhone;
        document.getElementById('address').value = liAddress;
        document.getElementById('code').value = liCode;

        document.querySelector('#infoPreview').innerHTML = '';

        submitBtn.disabled = false;
        editBtn.disabled = true;
        continueBtn.disabled = true;

    }

    function onClickContinue() {

        document.querySelector('#block').innerHTML = '<h3>Thank you for your reservation!</h3>';

    }
}