
  var myscore = 0;
  var comscore = 0;
  var youcho = '';
  var comchoise ='';
  result = '';
  var rockbutton = document.querySelector('#rock');
  var paperbutton = document.querySelector('#paper');
  var scissorbutton = document.querySelector('#scissor');
  rockbutton.addEventListener('click',function(){
   ro();
  })
  paperbutton.addEventListener('click',function(){
   pa();
  })
  scissorbutton.addEventListener('click',function(){
   sc();
  })
  document.querySelector('#reset').addEventListener('click',function(){
   rese();
  })
  function wer(){
     document.querySelector('#myscore').innerHTML = myscore;
     document.querySelector('#comscore').innerHTML = comscore;
     document.querySelector('#me').innerHTML = youcho;
     document.querySelector('#com').innerHTML = comchoise;
     document.querySelector('#win').innerHTML = result;
  }

  function comf(){
   var d = Math.random()
   if(d>=0 && d<1/3){
    comchoise = 'rock'
   }
   else if(d>=1/3 && d<2/3){
    comchoise = 'paper'
   }
   else if(d>=2/3 && d<=1){
    comchoise ='scissor'
   }
  }
  function ro(){
     comf();
     youcho = 'rock'
       if(comchoise === 'scissor'){
        result = 'User Win';
        myscore += 1;
       }
       else if(comchoise === 'paper'){
        result = 'Computer Win'
        comscore+=1;
       }
       else if(comchoise === 'rock'){
        result = 'Match tie..'
       }
        wer();
  }
  function pa(){
     comf();
     youcho = 'paper'
   if(comchoise === 'scissor'){
    result = 'User Win';
    myscore += 1;
   }
   else if(comchoise === 'rock'){
    result = 'Computer Win'
    comscore+=1;
   }
   else if(comchoise === 'paper'){
    result = 'Match tie..'
   }
   wer();
}
function sc(){
     youcho = 'scissor'
     comf();
 if(comchoise === 'paper'){
  result = 'User Win';
  myscore += 1;
 }
 else if(comchoise === 'rock'){
  result = 'Computer Win'
  comscore+=1;
 }
 else if(comchoise === 'scissor'){
  result = 'Match tie..'
 }
 wer();
}
function rese(){
     comscore = 0;
     myscore = 0;
     document.querySelector('#myscore').innerHTML = '00'
     document.querySelector('#comscore').innerHTML = '00'
}

   
   

