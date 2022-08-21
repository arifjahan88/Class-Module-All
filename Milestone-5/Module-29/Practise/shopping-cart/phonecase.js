function casetotalamount(isIncrease){
    const caseelementfield = document.getElementById('case-number-field');
    const caseelementstring = caseelementfield.value;
    const previouscase = parseInt(caseelementstring);
    
    let newcasenumber;
    if(isIncrease){
        newcasenumber = previouscase + 1;
    }
    else{
        newcasenumber = previouscase - 1;
    }
    caseelementfield.value = newcasenumber;
    return newcasenumber;
}

function updatecaseprice(newcasenumber){
    const casetotal = newcasenumber * 59;
    const casetotalamount = document.getElementById('case-total');
    casetotalamount.innerText = casetotal;
}

document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newcasenumber = casetotalamount(true);
    updatecaseprice(newcasenumber);

    calculatesubtotal();
})

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newcasenumber = casetotalamount(false);
    updatecaseprice(newcasenumber);

    calculatesubtotal();
})

document.getElementById('clear2').addEventListener('click', function(){
    const phonenumberfield = document.getElementById('case-number-field');
    phonenumberfield.value = '';

    const phonetotalclear = document.getElementById('case-total');
    phonetotalclear.innerText = '';
})