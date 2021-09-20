function encodeAndDecodeMessages() {

    let placeholderElement = document.querySelectorAll('textarea')[0];
    let disabledPlaceholderElement = document.querySelectorAll('textarea')[1];

    let sendItBtn = document.querySelectorAll('button')[0];
    let decodeItBtn = document.querySelectorAll('button')[1];

    sendItBtn.addEventListener('click', onClick);
    decodeItBtn.addEventListener('click', onDecodeItClick);

    function onClick() {
        let textInMessage = placeholderElement.value;
        let newText = '';

        for (let i = 0; i < textInMessage.length; i++) {
            let asciiValue = textInMessage.charCodeAt(i) + 1;
            newText += String.fromCharCode(asciiValue);
        }

        placeholderElement.value = '';
        disabledPlaceholderElement.value = newText;
    }

    function onDecodeItClick() {
        let inputText = disabledPlaceholderElement.value;
        let decodedText = '';

        for (let i = 0; i < inputText.length; i++) {
            let asciiValue = inputText.charCodeAt(i) - 1;
            decodedText += String.fromCharCode(asciiValue);
        }

        disabledPlaceholderElement.value = decodedText;
    }

}