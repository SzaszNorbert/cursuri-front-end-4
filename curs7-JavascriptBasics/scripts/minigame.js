var numbr,ans;
numbr=Math.floor(Math.random()*10);
do {
 ans = prompt("Guess the number!");
   if (numbr<=3) {
    // console.log("try a number between 0 and 3");
     document.getElementById("hint").innerHTML="try a number between 0 and 3";
   }else if(numbr>3 && numbr<=6) {
     //console.log("try a number between 3 and 6");
     document.getElementById("hint").innerHTML="try a number between 3 and 6";
   }else {
    // console.log("Try a number between 6 and 9");
     document.getElementById("hint").innerHTML="try a number between 6 and 9";
 }
} while(ans != numbr);
//console.log("The number you have given:",ans,"And the number that it is:",numbr);
document.getElementById("res").innerHTML="The number you have given:"+ans+"\n And the number that it is:"+numbr;