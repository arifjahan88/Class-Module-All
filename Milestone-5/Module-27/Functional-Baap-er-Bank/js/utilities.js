function getinputfieldvaluebyid(inputfield){
    const input_field = document.getElementById(inputfield);
    const inputfieldvaluestring = input_field.value;
    const inputfieldvalue = parseFloat(inputfieldvaluestring);
    input_field.value = '';
    return inputfieldvalue;
}

function getelementvaluebyid(elementid){
    const element = document.getElementById(elementid);
    const elementvaluebystring = element.innerText;
    const textvalue = parseFloat(elementvaluebystring);
    return textvalue;
}

function settextelementbyid(elementId, newvalue){
    const textelement = document.getElementById(elementId);
    textelement.innerText = newvalue;
}