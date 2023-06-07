window.onload = function () {
var me ;
var count = 0;
var s = 0;
var m = 0;
var h = 0;
var timer ;
var hrs = document.getElementById('hrs');
var mins = document.getElementById('mins');
var secs = document.getElementById('sec');
var start = document.getElementById('start');
var stopme = document.getElementById('sp');
var rwa = document.getElementById('res');

start.onclick = function(){
 timer = true;
 stat();
}
stopme.onclick = function(){
   clearTimeout(me);
}
rwa.addEventListener('click',function(){
 count = 0;
 s = 0;
 m = 0;
 h = 0;
 secs.innerHTML = s;
 mins.innerHTML = m;
 hrs.innerHTML = h;
 clearTimeout(me);
})
function stat(){
    count++;
    if(count>=100){
     s++;
     count-=100;
    }
    if(s>=60){
     m++;
     s-=60
    }
    if(m>=60){
     h++;
     m-=60;
    }
    secs.innerHTML = (s<=9)?'0'+s:s;
    mins.innerHTML = (m<=9)?'0'+m:m;
    hrs.innerHTML = (h<=9)?'0'+h:h;
    me = setTimeout(stat,10);
}

}