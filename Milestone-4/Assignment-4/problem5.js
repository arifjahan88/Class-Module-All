// Problem 5: isBestFriend

// তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।

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
const friend1 = {name: "doe", friend: "alex"};
const friend2 = {name: "alex", friend: "doe"};

console.log(isBestFriend(friend1, friend2));
