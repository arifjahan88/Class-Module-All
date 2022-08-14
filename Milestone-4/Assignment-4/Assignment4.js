// _______Problem 1________
function radianToDegree (radian){
    if(typeof radian == 'number'){
        const pi = 3.14159265359;
        let degree = radian * (180 / pi);
        let newdegree = degree.toFixed(2);
        return newdegree;
    }
    else{
        const wronginput = "Please Enter right input.";
        return wronginput;
    }
}

// _______Problem 2________
function isJavaScriptFile(String){
    if(typeof String != 'number'){
        const result = String.endsWith('.js');
        return result;
    }
    else{
        const wronginput = "Please Enter right input.";
        return wronginput;
    }
}

// _______Problem 3________
function oilPrice(prize1, prize2, prize3){
    if(typeof prize1 == 'number' && typeof prize2 == 'number' && typeof prize3 == 'number'){
        const disel = 114 * prize1;
        const petrol = 130 * prize2;
        const okten = 135 * prize3;
        const result = disel + petrol + okten;
        return result;
    }
    else{
        const wronginput = "Please Enter right input.";
        return wronginput;
    }
}

// _______Problem 4________
function publicBusFare(people){
    if(typeof people == 'number'){
        const busfare = people % 50;
        const microfare = busfare % 11;
        const result = microfare * 250;
        return result;
    }
    else{
        const wronginput = "Please Enter right input.";
        return wronginput;
    }
}

// _______Problem 5________
function isBestFriend (friend_1, friend_2){
    if(typeof friend_1 == 'object' && typeof friend_2 == 'object'){
        if(friend_1.name == friend_2.friend && friend_2.name == friend_1.friend){
            return true;
        }
        else{
            return false;
        }
    }
    else{
        const wronginput = "Please Enter right input.";
        return wronginput;
    }
}