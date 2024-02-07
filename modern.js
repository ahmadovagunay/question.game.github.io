let confirms=0
let wrongs=0



const questions  =[
    {
    question:"lf you had a whole day where you could do anything you wanted, what would you do?",
     answers:[
         {answer:"l would sleep",
           lsItTrue:false},
         {answer: "Nothing",
           lsItTrue:false},
         {answer:"l would go back to my childhood",
            lsItTrue:true}
 
     ]
 },
 {
    question:"How do you cope when things get hard?",
      answers:[
        {answer:"I'm trying to disappear",
          lsItTrue:false},
        {answer:"I think about what to do",
          lsItTrue:true},
        {answer:"I take advice",
        lsItTrue:false  }
   

      ]
 },
 {
  question:"How do you know when you can trust someone?",
  answers:[
      {answer:"l'm feeling",
       lsItTrue:false},
      {answer:"understandable over time",
       lsItTrue:true},
      {answer:"doubt is always better",
        lsItTrue:false}

  ]
},
{
  question:"Do you have any obsessions?So what are these?",
  answers:[
      {answer:"I am a relaxed person",
       lsItTrue:false},
      {answer:"OKB",
        lsItTrue: true},
      {answer:"Bipolar",
       lsItTrue:false}
  

     ]
 }
 ]
 let index=0
 function showquestion () {
  
    const question1=questions[index];
    const btn1= document.querySelector('#answer1')
    const btn2= document.querySelector('#answer2')
    const btn3= document.querySelector('#answer3')


    btn1.onclick=function () {
      if (question1.answers[0].lsItTrue){
          alert("Well done right")
          confirms++;
      }
      else {
        alert("Sorry wrong");
        wrongs++;
      }
      
    }
    btn2.onclick=function () {
      if (question1.answers[1].lsItTrue){
          alert("Well done right")
          confirms++;
      }
      else {
        alert("Sorry wrong");
        wrongs++;
      }
      next ();
    }
    btn3.onclick=function () {
      if (question1.answers[2].lsItTrue){
          alert("Well done right");
          confirms++;
      }
      else {
        alert("Sorry wrong");
        wrongs++;
      }
      next ();
    }


    document.querySelector('#question').innerHTML=question1.question;
   btn1.innerHTML=question1.answers[0].answer
   btn2.innerHTML=question1.answers[1].answer
   btn3.innerHTML=question1.answers[2].answer

  




  
 }
 function next () {
     index ++;
     if (index>(questions.length-1)) {

        document.querySelector ('#dogru-sayi').innerHTML=confirms
        document.querySelector ('#sehv-sayi').innerHTML=wrongs
     }
     else {
         showquestion ();
     }
 } 
 function progressBariDeyis(){
  const percentage= 100*(index/ questions.length);
  document.querySelector('#indicator').style.width=percentage + '%';
 }
 showquestion ();
 document.querySelector('#next').addEventListener ('click', next);
 document.querySelector('#restart').addEventListener('click', function(){
  confirms=0;
  wrongs=0;
  index=0;
  showquestion();
  document.querySelector('#question-section').style.display ='block'
  document.querySelector('#result-section').style.display='none'
 });

 