document.addEventListener('DOMContentLoaded', function () {
    const greenRange = document.getElementById('greenRange');
    const greenBox = document.getElementById('greenBox');
    const greenHex = document.getElementById('greenHex');

    const whiteRange = document.getElementById('whiteRange');
    const whiteBox = document.getElementById('whiteBox');
    const whiteHex = document.getElementById('whiteHex');

    const redRange = document.getElementById('redRange');
    const redBox = document.getElementById('redBox');
    const redHex = document.getElementById('redHex');

    function updateGreenBox() {
        const greenValue = parseInt(greenRange.value);
        const rgb = `rgb(0, ${greenValue}, 0)`;
        const hex = `#00${greenValue.toString(16).padStart(2, '0').toUpperCase()}00`;
        greenBox.style.backgroundColor = rgb;
        greenHex.textContent = hex;
    }

    function updateWhiteBox() {
        const whiteValue = parseInt(whiteRange.value);
        const rgb = `rgb(${whiteValue}, ${whiteValue}, ${whiteValue})`;
        const hex = `#${whiteValue.toString(16).padStart(2, '0').toUpperCase()}${whiteValue.toString(16).padStart(2, '0').toUpperCase()}${whiteValue.toString(16).padStart(2, '0').toUpperCase()}`;
        whiteBox.style.backgroundColor = rgb;
        whiteHex.textContent = hex;
    }

    function updateRedBox() {
        const redValue = parseInt(redRange.value);
        const rgb = `rgb(${redValue}, 0, 0)`;
        const hex = `#${redValue.toString(16).padStart(2, '0').toUpperCase()}0000`;
        redBox.style.backgroundColor = rgb;
        redHex.textContent = hex;
    }

    // Actualizar los colores al cargar la página
    updateGreenBox();
    updateWhiteBox();
    updateRedBox();

    // Event listeners para los sliders
    greenRange.addEventListener('input', updateGreenBox);
    whiteRange.addEventListener('input', updateWhiteBox);
    redRange.addEventListener('input', updateRedBox);
});
