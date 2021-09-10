function attachGradientEvents() {

    let gradientElement = document.querySelector('#gradient');
    gradientElement.addEventListener('mousemove', onMove);

    function onMove(event) {
        let movement = event.offsetX;
        let result = Math.floor((movement / event.target.clientWidth) * 100);
        document.querySelector('#result').textContent = `${result}%`;
    }
}