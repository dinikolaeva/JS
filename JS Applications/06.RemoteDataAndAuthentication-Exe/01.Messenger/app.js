function attachEvents() {

    const sendBtn = document.querySelector('#submit');
    sendBtn.addEventListener('click', onSendClick);

    const refreshBtn = document.querySelector('#refresh');
    refreshBtn.addEventListener('click', onRefreshClick);

    const author = document.getElementsByName('author')[0];
    const content = document.getElementsByName('content')[0];

    const url = 'http://localhost:3030/jsonstore/messenger';

    async function onSendClick() {

        if (author.value == '' || content.value == '') {
            alert('All fields are required!');
            return;
        }

        const response = await fetch(url, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ author: author.value, content: content.value })
        });

        if (!response.ok) {
            const error = await response.json;
            alert(error.message);
            return;
        }

        author.value = '';
        content.value = '';

    }

    async function onRefreshClick() {
        let textArea = document.getElementById('messages');

        const response = await fetch(url)

        if (!response.ok) {
            const error = await response.json;
            alert(error.message);
            return;
        }

        const data = await response.json();

        let message = Object.values(data)
            .map(el => `${el.author}: ${el.content}`)
            .join('\n');
        textArea.value = message;
    };
}

attachEvents();