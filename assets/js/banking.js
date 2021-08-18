const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');

// function to get the amount 
function getInputData(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputData = inputField.value
    if (inputData != '') {
        const inputAmount = parseFloat(inputData);
        inputField.value = '';
        return inputAmount;
    }
}

function updateData(updateFieldId, inputData, isTrue) {
    const updateField = document.getElementById(updateFieldId);
    const updateFieldNum = parseFloat(updateField.innerText);

    if (inputData > 0 && inputData != 'undefined') {
        if (isTrue) {
            updateField.innerText = updateFieldNum + inputData;
        } else {
            updateField.innerText = updateFieldNum - inputData
        }
    }
}

// Deposit button handler 
depositBtn.addEventListener('click', function () {
    const amount = getInputData('deposit-amount');
    // update total deposit 
    updateData('deposit-total', amount, true)
    // update Balance 
    updateData('balance-total', amount, true)

})

// withdraw button handler
withdrawBtn.addEventListener('click', function () {
    const balance = parseFloat(document.getElementById('balance-total').innerText);
    const amount = getInputData('withdraw-amount');
    if (balance > amount) {
        // update withdraw total 
        updateData('withdraw-total', amount, true)
        // update Balance 
        updateData('balance-total', amount, false)
    } else {
        alert("Insufficient amount!");
    }
})