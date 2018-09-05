window.addEventListener("load",onLoaded);

function onLoaded(){
  
  var choice=document.querySelector("input[name='user-input']");
  var computerChoice=document.getElementById("computer-choice");
  var userChoice=document.getElementById("user-choice");
  var result=document.getElementById("result");
  
  var form=document.querySelector("form");
  form.addEventListener("submit",function(event){
    event.preventDefault();
    
    gameExecution(choice.value,computerChoice,userChoice,result);
  })
}

function gameExecution(choice,computer,user,result){
  var gen=Math.floor(Math.random()*10);
  var comp="";
  
      if (gen<=3) {
        comp="rock";
            if (choice==="rock") {
              computer.innerHTML="Computer chose:"+comp;
              user.innerHTML="User chose:"+choice;
              result.innerHTML="Egality";
            }
            else if(choice==="paper") {
              computer.innerHTML="Computer chose:"+comp;
              user.innerHTML="User chose:"+choice;
              result.innerHTML="User wins";
            }
            else if(choice==="scissor") {
              computer.innerHTML="Computer chose:"+comp;
              user.innerHTML="User chose:"+choice;
              result.innerHTML="Computer wins";
            }
            else {
              result.innerHTML="Only rock paper or scissor is allowed in the game!!!!";
            }
      } 
      else if (gen>3 && gen<6) {
        comp="paper";
            if (choice==="rock") {
              computer.innerHTML="Computer chose:"+comp;
              user.innerHTML="User chose:"+choice;
              result.innerHTML+"Computer wins";
            }
            else if(choice==="paper") {
              computer.innerHTML="Computer chose:"+comp;
              user.innerHTML="User chose:"+choice;
              result.innerHTML="Egality";
            }
            else if(choice==="scissor") {
              computer.innerHTML="Computer chose:"+comp;
              user.innerHTML="User chose:"+choice;
              result.innerHTML="User wins";
            }
            else {
              result.innerHTML="Only rock paper or scissor is allowed in the game!!!!";
            }
      }
      else if(gen>6 && gen<=9) {
        comp="scissor";
            if (choice==="rock") {
              computer.innerHTML="Computer chose:"+comp;
              user.innerHTML="User chose:"+choice;
              result.innerHTML="User wins";
            }
            else if(choice==="paper") {
              computer.innerHTML="Computer chose:"+comp;
              user.innerHTML="User chose:"+choice;
              result.innerHTML="Computer wins";
            }
            else if(choice==="scissor") {
              computer.innerHTML="Computer chose:"+comp;
              user.innerHTML="User chose:"+choice;
              result.innerHTML="Egality";
            }
            else {
              result.innerHTML="Only rock paper or scissor is allowed in the game!!!!";
            }
      }
  
}