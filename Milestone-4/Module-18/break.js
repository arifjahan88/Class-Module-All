for(var i = 0; i < 30; i++) {
    console.log(i);
    if(i == 20){
        break;
    }
}

// While loop
var roastgiven = 0;
while(roastgiven < 10){
    console.log("Roast den please");
    roastgiven++;
    if(roastgiven > 5){
        break;
    }
}

var data = ["arif", "Jahan", "Roman", "Sahadat", "Saykot"]
for(var i = 0; i < data.length; i++) {
    var datas = data[i];
    if(datas == "Roman"){
        break;
    }
    console.log(datas);
}