function extractText() {
    let elements = document.getElementsByTagName('li')
    let elementsArr = [...elements];
    let result = elementsArr.map(e => e.textContent);
    const textArea = document.getElementById('result');
    textArea.value = result.join('\n');
}