
function clock() {
const fullDate = new Date();
 var hours = fullDate.getHours();
 var min = fullDate.getMinutes();
 var secs = fullDate.getSeconds();
    if(hours <10){
        hours = "0" + hours;
    }
    if(min <10){
        min = "0" + min;
    }
     if(secs <10){
        secs = "0" + secs;
    } 
document.getElementById("hour").innerHTML = hours;
document.getElementById("minute").innerHTML =":" + min;
document.getElementById("second").innerHTML =":" + secs;  
}

setInterval(clock,100);
