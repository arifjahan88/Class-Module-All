document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newwithdrawamount = getinputfieldvaluebyid('user-withdraw');
    const previouswithdrawtotal = getelementvaluebyid('withdraw-total');
    const newwithdrawtotal = newwithdrawamount + previouswithdrawtotal;

    settextelementbyid('withdraw-total', newwithdrawtotal);

    const previousbalancetotal = getelementvaluebyid('balance-total');
    const newbalance = previousbalancetotal - newwithdrawamount;

    settextelementbyid('balance-total', newbalance);
})