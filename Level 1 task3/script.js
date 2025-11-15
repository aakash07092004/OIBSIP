
document.addEventListener("DOMContentLoaded", function() {

    const inputValue = document.getElementById("inputValue");
    const fromUnit = document.getElementById("fromUnit");
    const toUnit = document.getElementById("toUnit");
    const convertBtn = document.getElementById("convertBtn");
    const resultText = document.getElementById("resultText");

    convertBtn.addEventListener("click", function() {
        const tempValue = parseFloat(inputValue.value);
        const from = fromUnit.value;
        const to = toUnit.value;

        if (isNaN(tempValue)) {
            showError("Please enter a valid number.");
            return;
        }
        
        let valueInCelsius;

        switch (from) {
            case 'C':
                valueInCelsius = tempValue;
                break;
            case 'F':
                valueInCelsius = (tempValue - 32) * (5/9);
                break;
            case 'K':
                valueInCelsius = tempValue - 273.15;
                break;
        }

        let resultValue;

        switch (to) {
            case 'C':
                resultValue = valueInCelsius;
                break;
            case 'F':
                resultValue = (valueInCelsius * 9/5) + 32;
                break;
            case 'K':
                resultValue = valueInCelsius + 273.15;
                break;
        }

        showResult(tempValue, from, resultValue, to);
    });

    function showResult(originalValue, fromUnit, finalValue, toUnit) {
        const resultString = `${originalValue}°${fromUnit} is equal to ${finalValue.toFixed(2)}°${toUnit}`;
        
        resultText.textContent = resultString;
        resultText.classList.remove("error");     }
    function showError(message) {
        resultText.textContent = message;
        resultText.classList.add("error");
    }
});