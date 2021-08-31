function solve() {
    let inputText = document.getElementById('text').value;
    let convention = document.getElementById('naming-convention').value;
    let lowerCaseInputText = inputText.toLowerCase().split(' ');

    let result = applyConvention(lowerCaseInputText, convention)

    let resultElement = document.getElementById('result');
    resultElement.textContent = result;

    function applyConvention(text, convention) {
        const finalText = {
            'Pascal Case': () => text
                .map(w => w[0].toUpperCase() + w.slice(1))
                .join(''),
            'Camel Case': () => text
                .map((w, index) => w = index !== 0 ? w[0].toUpperCase() + w.slice(1) : w)
                .join(''),
            default: () => 'Error!'
        };

        return (finalText[convention] || finalText.default)();
    }
}