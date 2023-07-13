function converter(){
    let enteredTemp = document.querySelector(".enteredTemp");
    let outputTemp = document.querySelector(".outputTemp");
    let inputValue, outputValue;

    let tempNumber = Number(document.querySelector("#number").value);
    let dropDown = document.querySelector("#dropDown").value;
    let expectedUnit = document.querySelector("#expectedUnit").value;
    
    inputValue = tempNumber + " " + dropDown;
    if(dropDown === 'Celsius'){
        if(expectedUnit === 'Celsius'){
            outputValue = tempNumber + " " + expectedUnit;
        } else if(expectedUnit === 'Kelvin'){
            outputValue = (tempNumber + 273) + " " + expectedUnit;
        } else {
            outputValue = ((tempNumber * 9/5) +32 ) + " " + expectedUnit;
        }
    } else if(dropDown === 'Kelvin'){
        if(expectedUnit === 'Kelvin'){
            outputValue = tempNumber + " " + expectedUnit;
        } else if(expectedUnit === 'Celsius'){
            outputValue = (tempNumber - 273) + " " + expectedUnit;
        } else {
            outputValue = ((((tempNumber - 273)) * 9/5) + 32) + " " + expectedUnit;
        }
    } else {
        if(expectedUnit === 'Kelvin'){
            outputValue = ((tempNumber - 32) * 5 / 9) + 273;
        } else if(expectedUnit === 'Celsius'){
            outputValue = ((tempNumber -32) * 5/9) + " " + expectedUnit;
        } else {
            outputValue = tempNumber + " " + expectedUnit;
        }
    }

    enteredTemp.innerHTML = inputValue;
    outputTemp.innerHTML = outputValue;
}