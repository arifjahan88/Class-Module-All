document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositfield = document.getElementById('user-deposit');
    const newdepositamountstring =  depositfield.value;
    const newdepositamount = parseFloat(newdepositamountstring);
    
    const deposittotalelement = document.getElementById('deposit-total');
    const previousdeposittotalstring = deposittotalelement.innerText;
    const previousdeposittotal = parseFloat(previousdeposittotalstring);

    const currentdepositamount = previousdeposittotal + newdepositamount;

    deposittotalelement.innerText = currentdepositamount;

    // get balance total
    const balancetotalelement = document.getElementById('balance-total');
    const previousbalancetotalstring = balancetotalelement.innerText;
    const currentbalancetotal = parseFloat(previousbalancetotalstring) + newdepositamount;
    balancetotalelement.innerText = currentbalancetotal;

    // clear the field
    depositfield.value = '';
})