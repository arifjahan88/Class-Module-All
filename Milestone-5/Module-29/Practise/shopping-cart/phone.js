function updatePhoneNumber(isIncrease){
    const phonenumberfield = document.getElementById('phone-number-field');
    const phoneNumberFieldstring = phonenumberfield.value;
    const phonenumber = parseInt(phoneNumberFieldstring);
    
    let newPhoneNumber;

    if(isIncrease){
        newPhoneNumber = phonenumber + 1;
    }
    else{
        newPhoneNumber = phonenumber - 1;
    }
    phonenumberfield.value = newPhoneNumber;
    return newPhoneNumber;
 }

 function updatePhoneTotalPrice(newPhoneNumber){
    const phonetotalprise = newPhoneNumber * 1219;
    const phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phonetotalprise;
 }


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true);  
    updatePhoneTotalPrice(newPhoneNumber);

    calculatesubtotal();
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false);
    updatePhoneTotalPrice(newPhoneNumber);

    calculatesubtotal();
})
document.getElementById('clear1').addEventListener('click', function(){
    const phonenumberfield = document.getElementById('phone-number-field');
    phonenumberfield.value = '';

    const phonetotalclear = document.getElementById('phone-total');
    phonetotalclear.innerText = '';
})
