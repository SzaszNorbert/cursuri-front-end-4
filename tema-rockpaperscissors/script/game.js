function rpc(user) {
  var gnrt=0;
  var computer="";
  gnrt=Math.floor(Math.random()*10);
  if (gnrt<=3) {
    computer="rock";
        if (user==="rock") {
          console.log("Computer chose:",computer);
          console.log("User chose:",user);
          console.log("Egality");
        }
        else if(user==="paper") {
          console.log("Computer chose:",computer);
          console.log("User chose:",user);
          console.log("User wins");
        }
        else if(user==="scissor") {
          console.log("Computer chose:",computer);
          console.log("User chose:",user);
          console.log("Computer wins");
        }
        else {
          console.log("Only rock paper or scissor is allowed in the game!!!!");
        }
  } 
  else if (gnrt>3 && gnrt<6) {
    computer="paper";
        if (user==="rock") {
          console.log("Computer chose:",computer);
          console.log("User chose:",user);
          console.log("Computer wins");
        }
        else if(user==="paper") {
          console.log("Computer chose:",computer);
          console.log("User chose:",user);
          console.log("Egality");
        }
        else if(user==="scissor") {
          console.log("Computer chose:",computer);
          console.log("User chose:",user);
          console.log("User wins");
        }
        else {
          console.log("Only rock paper or scissor is allowed in the game!!!!");
        }
  }
  else if(gnrt>6 && gnrt<=9) {
    computer="scissor";
        if (user==="rock") {
          console.log("Computer chose:",computer);
          console.log("User chose:",user);
          console.log("User wins");
        }
        else if(user==="paper") {
          console.log("Computer chose:",computer);
          console.log("User chose:",user);
          console.log("Computer wins");
        }
        else if(user==="scissor") {
          console.log("Computer chose:",computer);
          console.log("User chose:",user);
          console.log("Egality");
        }
        else {
          console.log("Only rock paper or scissor is allowed in the game!!!!");
        }
  }
}

var user=prompt("Choose rock paper or scissor");

rpc(user);