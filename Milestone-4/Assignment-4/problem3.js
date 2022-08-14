// Problem 3: oilPrice ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে। 

// প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা
// প্রতি লিটার অকটেনের এর দাম – 135 টাকা 
// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে। 

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

console.log(oilPrice(0, 2, 3));