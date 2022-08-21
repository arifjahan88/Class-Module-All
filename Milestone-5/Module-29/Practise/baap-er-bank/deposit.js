document.getElementById('btn-deposit').addEventListener('click', function(){
    const previousinputvalue = getinputelementbyid('user-deposit');
    const previouselementvalue = getelementvaluebyid('deposit-total');

    const newelementvalue = previousinputvalue + previouselementvalue;
    setelementbyid('deposit-total', newelementvalue);

    const previoustotal = getelementvaluebyid('balance-total');
    const newprevioustotal = previoustotal + newelementvalue;
    setelementbyid('balance-total', newprevioustotal);
})