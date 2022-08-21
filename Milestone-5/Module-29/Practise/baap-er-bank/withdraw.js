document.getElementById('btn-withdraw').addEventListener('click', function(){
    const previouswithdawvalue = getinputelementbyid('user-withdraw');
    const previouswithdrawelement = getelementvaluebyid('withdraw-total');

    const newwithdrawtotal = previouswithdawvalue + previouswithdrawelement;
    setelementbyid('withdraw-total', newwithdrawtotal);

    const previousbalancetotal = getelementvaluebyid('balance-total');
    const newbalancetotal = previousbalancetotal - newwithdrawtotal;
    setelementbyid('balance-total', newbalancetotal);
})