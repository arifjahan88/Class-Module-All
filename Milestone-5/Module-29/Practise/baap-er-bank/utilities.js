function getinputelementbyid(inputelementid){
    const inputfield = document.getElementById(inputelementid);
    const inputfieldelementstring = inputfield.value;
    const inputvalue = parseFloat(inputfieldelementstring);
    inputfield.value = '';
    return inputvalue;
}

function getelementvaluebyid(elementvalue){
    const element = document.getElementById(elementvalue);
    const elementvaluestring = element.innerText;
    const inputelementvalue = parseFloat(elementvaluestring);
    return inputelementvalue;
}

function setelementbyid(elementid, newvalue){
    const textelement = document.getElementById(elementid);
    textelement.innerText = newvalue;
}

