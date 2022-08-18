document.getElementById('btn-deposit').addEventListener('click', function(){
    const newdeposit = getinputfieldvaluebyid('user-deposit');
    const previousdeposittotal = getelementvaluebyid('deposit-total');
    
    const newdeposittotal = newdeposit + previousdeposittotal;
    settextelementbyid('deposit-total', newdeposittotal);

    const previousbalancetotal = getelementvaluebyid('balance-total');
    const newbalance = previousbalancetotal + newdeposittotal;
    settextelementbyid('balance-total', newbalance);
})