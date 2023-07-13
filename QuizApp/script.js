window.onload =function(){
const radioButtons = document.querySelectorAll('input[type="radio"]');

marks = 1
let question = document.getElementById('question')
let op1 = document.getElementById('b1')
let op2 = document.getElementById("b2")
let op3 = document.getElementById("b3")
let op4 = document.getElementById("b4")
let p1 = document.getElementById('o1')
let p2 = document.getElementById("o2")
let p3 = document.getElementById("o3")
let p4 = document.getElementById("o4")
let quiz1 = {
    questions:"What is the only thing that computers understand?",
    opt1:"Machine Code",
    opt2:"Numbers",
    opt3:"Letters",
    opt4:"characters",
    correct:"Machine Code",
    connectt:function(){
        question.innerHTML = this.questions;
        op1.innerHTML = this.opt1
        op2.innerHTML = this.opt2
        op3.innerHTML = this.opt3
        op4.innerHTML = this.opt4
        p1.value=this.opt1
        p2.value=this.opt2
        p3.value=this.opt3
        p4.value=this.opt4
    }
}
let quiz8 = {
    questions:"Welcome to Quiz App",
    opt1:"This is simple app",
    opt2:"I Build for learning purposs",
    opt3:"github.com/logesh-works",
    opt4:"logesh.xyz",
    correct:"Machine Code",
    connectt:function(){
        question.innerHTML = this.questions;
        op1.innerHTML = this.opt1
        op2.innerHTML = this.opt2
        op3.innerHTML = this.opt3
        op4.innerHTML = this.opt4
        p1.value=this.opt1
        p2.value=this.opt2
        p3.value=this.opt3
        p4.value=this.opt4
    }
}

let quiz2 = {
    questions:" Who invented C- langauge? ?",
    opt1:"James Gausling",
    opt2:"Guido Van Rossum",
    opt3:"Dennis Ritchie",
    opt4:" Bjarne Stroustrup",
    correct:"Dennis Ritchie",
    connectt:function(){
        question.innerHTML = this.questions;
        op1.innerHTML = this.opt1
        op2.innerHTML = this.opt2
        op3.innerHTML = this.opt3
        op4.innerHTML = this.opt4
        p1.value=this.opt1
        p2.value=this.opt2
        p3.value=this.opt3
        p4.value=this.opt4
    }
    
}
let quiz3 = {
    questions:"Find out the correct order ?",
    opt1:"char < int < double",
    opt2:"int > char > float",
    opt3:"char > int > float",
    opt4:"double > char > int",
    correct:"char < int < double",
    connectt:function(){
        question.innerHTML = this.questions;
        op1.innerHTML = this.opt1
        op2.innerHTML = this.opt2
        op3.innerHTML = this.opt3
        op4.innerHTML = this.opt4
        p1.value=this.opt1
        p2.value=this.opt2
        p3.value=this.opt3
        p4.value=this.opt4
    }
}
let quiz4 = {
    questions:"Which of the data types has the size that is variable?",
    opt1:"struct",
    opt2:"int",
    opt3:" float",
    opt4:"double",
    correct:"struct",
    connectt:function(){
        question.innerHTML = this.questions;
        op1.innerHTML = this.opt1
        op2.innerHTML = this.opt2
        op3.innerHTML = this.opt3
        op4.innerHTML = this.opt4
        p1.value=this.opt1
        p2.value=this.opt2
        p3.value=this.opt3
        p4.value=this.opt4
    }
}
let quzi5 ={connectt: function(){
    
   
    document.getElementById('question').innerHTML =`<h5>Your Score Was ${marks-1} <br>THANKS YOU...</h5>`
   document.getElementById('lit').innerHTML= ""
   vbv = document.getElementById('sumb')
   vbv.innerHTML = 'Refress'
   vbv.onclick=function(){
    
    location.reload()
   }
    
}}
quiz8.connectt()
bvc = []

correcta = [0,quiz1.correct,quiz2.correct,quiz3.correct,quiz4.correct,quzi5]
arraqu = [0,quiz1,quiz2,quiz3,quiz4,quzi5]
curindex= 1
let butt = document.getElementById('sumb')
butt.addEventListener('click',function(){
    butt.innerHTML="Submit"
    for (const radioButton of radioButtons) {
    // Check if the radio button is checked.
    if (radioButton.checked) {
      // The radio button is checked.
      bvc.push(radioButton.value);
      if(radioButton.value===arraqu[curindex-1].correct){
                 marks += 1
      }
      
      
    }}
    for (const radioButton of radioButtons) {
        radioButton.checked = false}
    arraqu[curindex].connectt()
    curindex+=1
    
   
    
    
})






}
