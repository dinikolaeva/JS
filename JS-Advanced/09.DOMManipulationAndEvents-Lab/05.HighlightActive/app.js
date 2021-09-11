function focused() {
    let inputFieldsElements = Array.from(document.getElementsByTagName('input'));
    inputFieldsElements.forEach(element => {
        element.addEventListener('focus', onFocused);
        element.addEventListener('blur', onBlurred);
    });

    function onFocused(event) {
        event.target.parentNode.className = 'focused';
    }

    function onBlurred(event) {
        event.target.parentNode.className = 'blurred';
    }
}