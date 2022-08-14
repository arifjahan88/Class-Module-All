// Problem 4: publicBusFare

// একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে )  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে । 

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

const mynumber = 365;
console.log(publicBusFare(mynumber));