function getelementvaluebyid (elementid){
    const element_field = document.getElementById(elementid);
    const element_field_string = element_field.innerText;
    const element_field_text = parseInt(element_field_string);
    return element_field_text;
}

function setelementvaluebyid(elementid, newvalue){
    const setelement = document.getElementById(elementid);
    setelement.innerHTML = newvalue;
}

function calculatesubtotal(){
    const phonetotal = getelementvaluebyid('phone-total');
    const casetotal = getelementvaluebyid('case-total');
    const subtotal = phonetotal + casetotal;
    setelementvaluebyid('sub-total', subtotal);

    const taxvalue = (subtotal * 0.1).toFixed(2);
    const finaltaxelement =parseFloat(taxvalue);
    setelementvaluebyid('tax-amount', finaltaxelement); 

    const previoustotal = subtotal + finaltaxelement;
    setelementvaluebyid('final-total', previoustotal);
    
}