const convertButton = document.getElementById("convert-button");
const tempInput = document.getElementById("temp-input");
const unitSelect = document.getElementById("unit-select");
const result = document.getElementById("result");

convertButton.addEventListener("click", function () {
    const temp = parseFloat(tempInput.value);
    const unit = unitSelect.value;
    let convertedTemp;

    if (unit === "celsius") {
        convertedTemp = (temp * 9 / 5) + 32;
        result.innerHTML = `${temp}&#8451; is ${convertedTemp}&#8457;`;
    } else if (unit === "fahrenheit") {
        convertedTemp = (temp - 32) * 5 / 9;
        result.innerHTML = `${temp}&#8457; is ${convertedTemp}&#8451;`;
    } else if (unit === "kelvin") {
        convertedTemp = temp - 273.15;
        result.innerHTML = `${temp}&#8490; is ${convertedTemp}&#8451;`;
    }
});
