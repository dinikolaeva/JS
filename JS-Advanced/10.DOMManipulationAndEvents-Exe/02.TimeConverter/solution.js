function attachEventsListeners() {

    const hoursInDay = 24;
    const minutesInDay = 1440;
    const secondsInDay = 86400;

    let convertElements = document.getElementsByTagName('input');
    let convertBtn = [];

    for (let i = 0; i < convertElements.length; i++) {
        if (i % 2 == 1) {
            convertBtn.push(convertElements[i]);
        }
    }

    convertBtn.forEach(btn => btn.addEventListener('click', onClick));

    function onClick(ev) {

        let valueElement = Number(ev.target.parentNode.children[1].value);
        let titleElement = ev.target.parentNode.children[0].textContent.trim();

        let daysElement = document.getElementById('days');
        let hoursElement = document.getElementById('hours');
        let minutesElement = document.getElementById('minutes');
        let secondsElement = document.getElementById('seconds');

        switch (titleElement) {
            case 'Days:':
                hoursElement.value = valueElement * hoursInDay;
                minutesElement.value = valueElement * minutesInDay;
                secondsElement.value = valueElement * secondsInDay;
                break;
            case 'Hours:':
                daysElement.value = valueElement / hoursInDay;
                minutesElement.value = valueElement * 60;
                secondsElement.value = valueElement * 3600;
                break;
            case 'Minutes:':
                daysElement.value = (valueElement / 60) / hoursInDay;
                hoursElement.value = valueElement / 60;
                secondsElement.value = valueElement * 60;
                break;
            case 'Seconds:':
                daysElement.value = (valueElement / 3600) / hoursInDay;
                hoursElement.value = valueElement / 3600;
                minutesElement.value = valueElement / 60;
                break;
        }
    }
}