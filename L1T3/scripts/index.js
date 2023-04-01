let input = document.querySelector('#temp');
input.onchange = convert;
document.querySelector('#temp-type').onchange = convert;
document.querySelector('#convert-to').onchange = convert;
document.querySelector('#convert-bt').onclick = convert;
function convert() {
    let value = () => {
        if (input.value === NAN){
            return 0;   
        }
        return input.value;
    };
    let result = 0;
    switch (document.querySelector('#temp-type').value) {
        case 'celsius':
            switch (document.querySelector('#convert-to').value) {
                case 'celsius':
                    result = value;
                    break;
                case 'fahrenheit':
                    result = degCtoF(value);
                    break;
                case 'kelvin':
                    result = ctok(value);
                    break;
            }
            break;
        case 'fahrenheit':
            switch (document.querySelector('#convert-to').value) {
                case 'celsius':
                    result = degftoc(value);
                    break;
                case 'fahrenheit':
                    result = value;
                    break;
                case 'kelvin':
                    result = ftok(value);
                    break;
            }
            break;
        case 'kelvin':
            switch (document.querySelector('#convert-to').value) {
                case 'celsius':
                    result = ktoc(value);
                    break;
                case 'fahrenheit':
                    result = ktof(value);
                    break;
                case 'kelvin':
                    result = value;
                    break;
            }
            break;
    }
    result = Math.round(result * 100) / 100;
    document.querySelector('#converted-temp').value = result + ' ' + document.querySelector('#convert-to').value;
};




function degCtoF(value) {
    return value * 9 / 5 + 32;
}

function degftoc(value) {
    return (value - 32) * 5 / 9;
}

function ctok(value) {
    return value + 273.15;
}

function ktoc(value) {
    return value - 273.15;
}

function ftok(value) {
    return (value - 32) * 5 / 9 + 273.15;
}

function ktof(value) {
    return (value - 273.15) * 9 / 5 + 32;
}
