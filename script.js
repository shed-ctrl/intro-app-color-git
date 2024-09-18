document.addEventListener('DOMContentLoaded', function() {
    // Obtener referencias a los elementos del DOM
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');
    const colorBox = document.getElementById('colorBox');
    const hexCode = document.getElementById('hexCode');
    const rgbValue = document.getElementById('rgbValue');
    const colorPicker = document.getElementById('colorPicker');

    // Función para actualizar el color y los códigos
    function updateColor() {
        // Obtener los valores de los controles deslizantes
        const red = parseInt(redRange.value);
        const green = parseInt(greenRange.value);
        const blue = parseInt(blueRange.value);

        // Crear el color RGB y el código hexadecimal
        const rgbColor = `rgb(${red}, ${green}, ${blue})`;
        const hexColor = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;

        // Actualizar el color del recuadro y los textos de los códigos
        colorBox.style.backgroundColor = rgbColor;
        hexCode.textContent = hexColor;
        rgbValue.textContent = rgbColor;

        // Actualizar los valores de los campos de texto
        redInput.value = red;
        greenInput.value = green;
        blueInput.value = blue;

        // Actualizar el valor del color picker
        colorPicker.value = hexColor;
    }

    // Función para actualizar los controles deslizantes desde los campos de texto
    function updateRangeFromInput() {
        redRange.value = redInput.value;
        greenRange.value = greenInput.value;
        blueRange.value = blueInput.value;
        updateColor();
    }

    // Función para actualizar los controles deslizantes y campos de texto desde el color picker
    function updateFromColorPicker() {
        const hexColor = colorPicker.value;
        const red = parseInt(hexColor.substr(1, 2), 16);
        const green = parseInt(hexColor.substr(3, 2), 16);
        const blue = parseInt(hexColor.substr(5, 2), 16);

        redRange.value = red;
        greenRange.value = green;
        blueRange.value = blue;
        redInput.value = red;
        greenInput.value = green;
        blueInput.value = blue;

        updateColor();
    }

    // Añadir eventos de entrada a los controles deslizantes
    redRange.addEventListener('input', updateColor);
    greenRange.addEventListener('input', updateColor);
    blueRange.addEventListener('input', updateColor);

    // Añadir eventos de entrada a los campos de texto
    redInput.addEventListener('input', updateRangeFromInput);
    greenInput.addEventListener('input', updateRangeFromInput);
    blueInput.addEventListener('input', updateRangeFromInput);

    // Añadir evento de cambio al color picker
    colorPicker.addEventListener('input', updateFromColorPicker);

    // Llamar a la función para establecer el color inicial
    updateColor();
});
