document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawfield = document.getElementById('user-withdraw');
    const newwithdrawamountstring = withdrawfield.value;
    const newwithdrawamount = parseFloat(newwithdrawamountstring);
    
    
    const withdrawtotalelement = document.getElementById('withdraw-total');
    const previouswithdrawtotalstring = withdrawtotalelement.innerText;
    const previouswithdrawtotal = parseFloat(previouswithdrawtotalstring);

    const currentwithdrawtotal = previouswithdrawtotal + newwithdrawamount;
    withdrawtotalelement.innerText = currentwithdrawtotal;

    withdrawfield.value = '';

    const balancetotalelement = document.getElementById('balance-total');
    const previousbalancetotalstring = balancetotalelement.innerText;
    const previousbalancetotal = parseFloat(previousbalancetotalstring);

    const newbalancetotal = previousbalancetotal - newwithdrawamount;
    balancetotalelement.innerText = newbalancetotal;

})