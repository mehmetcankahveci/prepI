var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();
var dateTime = date
 
document.getElementById("displayDateTime").innerHTML = dateTime + ' <span> Day :- ' + daylist[day];
