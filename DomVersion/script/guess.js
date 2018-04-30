window.addEventListener("load",onLoaded);

function onLoaded(){
  var number=Math.floor(Math.random()*10);
  var hint=document.getElementById("hint");
  var userInput=document.querySelector("input[name='user-choice']");
  var choice=Number(userInput.value);
  var result=document.getElementById("result");
  
  var form=document.querySelector("form");
  form.addEventListener("submit",function(event){
   // event.preventDefault();

    do {
    game(hint,choice,number);
      } while(choice !== number);
    result.innerHTML="The number you have given:"+choice+"\n And the number that it is:"+number;
  })
}

function game(hint,choice,number){

       if (number<=3) {
         hint.innerHTML="try a number between 0 and 3";
       }else if(number>3 && number<=6) {

         hint.innerHTML="try a number between 3 and 6";
       }else {

         hint.innerHTML="try a number between 6 and 9";
     }

 
}