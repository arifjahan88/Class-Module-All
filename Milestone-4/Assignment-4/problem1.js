// Problem:1  radianToDegree

// ফাংশন নেম দিতে হবে radianToDegree । এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)। তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে। রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

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

const mynumber = 199;
console.log(radianToDegree(mynumber));