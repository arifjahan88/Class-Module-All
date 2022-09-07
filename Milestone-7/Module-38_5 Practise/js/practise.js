// ১. setTimeout এর ভিতরে একটা কিছু কনসোল লগ করবে যেটা সাড়ে তিন সেকেন্ড পরে আউটপুট দেখাবে।

// console.log("Amar nam Hocche");
// setTimeout(() => {
//     console.log("Md Arif Jahan");
// },3500);

// ২. prompt দিয়ে ইউজারের কাছ থেকে একটা সংখ্যা নাও। সেটার সাথে ২০০যোগ করো। যোগ করতে গেলে parse করা লাগলে সেটা করো। তারপর সেই রেজাল্টকে alert দিয়ে আউটপুট দেখাও 

const enternumber = () =>{
    const getnumber = prompt("Enter Your Number");
    const parsenumber = JSON.parse(getnumber);
    //console.log(typeof(parsenumber));
    return parsenumber + 200;
}

const shownumber = () =>{
    alert("Your Number Is "+ enternumber());
}

// ৩. ব্রাউজারে একটা confirm করে জিজ্ঞেস করো তুমি কি তোমার ওয়েবসাইট এর লোকেশন দেখতে চাও। যদি বলে দেখতে চাই তাহলে সেই ওয়েবসাইট এর লোকেশন এর href জিনিসটা কনসোল লগ করে দেখাও 

const dontshowloaction = () =>{
    alert("Sorry Don't Show The Location")
}

const showlocation = () =>{
    alert("please check console")
    console.log(window.location.href);
}