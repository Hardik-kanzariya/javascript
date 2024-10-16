let purchase = 5000;

if(purchase >600 && purchase < 1000){
    console.log("congratulations you won 1 kg sugar");
}else if (purchase >= 1000 && purchase < 5000){
    console.log("congratulations you got 10% discount");
} else if (purchase >= 5000 && purchase <= 10000){
    console.log("congratulations you got 12% discount + free water bottle");
} else if (purchase >=10000 && purchase <=20000){
    console.log("congratulations you got 15% discount + free watch");
} else{
    console.log("congratulations you got 18% discount + free prime membership");
}