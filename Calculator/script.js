window.onload =function(){
var result = ''
document.querySelector('#one').addEventListener('click',function(){
 result+='1';
 document.querySelector('#result').value = result;
})
document.querySelector('#two').addEventListener('click',function(){
 result+='2';
 document.querySelector('#result').value = result;
})

document.querySelector('#three').addEventListener('click',function(){
 result+='3';
 document.querySelector('#result').value = result;
})
document.querySelector('#four').addEventListener('click',function(){
 result+='4';
 document.querySelector('#result').value = result;
})
document.querySelector('#five').addEventListener('click',function(){
 result+='5';
 document.querySelector('#result').value = result;
})
document.querySelector('#six').addEventListener('click',function(){
 result+='6';
 document.querySelector('#result').value = result;
})
document.querySelector('#seven').addEventListener('click',function(){
 result+='7';
 document.querySelector('#result').value = result;
})
document.querySelector('#eight').addEventListener('click',function(){
 result+='8';
 document.querySelector('#result').value = result;
})
document.querySelector('#Nine').addEventListener('click',function(){
 result+='9';
 document.querySelector('#result').value = result;
})
document.querySelector('#zero').addEventListener('click',function(){
 result+='0';
 document.querySelector('#result').value = result;
})
document.querySelector('#add').addEventListener('click',function(){
 result+='+';
 document.querySelector('#result').value = result;
})
document.querySelector('#mins').addEventListener('click',function(){
 result+='-';
 document.querySelector('#result').value = result;
})
document.querySelector('#mul').addEventListener('click',function(){
 result+='*';
 document.querySelector('#result').value = result;
})
document.querySelector('#div').addEventListener('click',function(){
 result+='/';
 document.querySelector('#result').value = result;
})
document.querySelector('#equal').addEventListener('click',function(){
 res();
 document.querySelector('#result').value = result;
})
document.querySelector('#back').addEventListener('click',function(){
 clear();
 document.querySelector('#result').value = result;
})
function res(){
 result = eval(result)
 document.querySelector('#result').value = result;
}
function clear(){
 result = '';
 document.querySelector('#result').value = result;
}
}