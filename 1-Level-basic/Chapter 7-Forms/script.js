let today = new Date();
var hourNow = today.getHours();
let greeting = "";

if(hourNow > 18){
    greeting = "Good Evening!";
}else if(hourNow > 12){
    greeting = "Good afternoon!";
}else if(hourNow > 0){
    greeting = "Good morning!";
}else{
    greeting = "Welcome!";
}


document.getElementById('root').innerHTML = '<b>' +greeting+ '</b>';