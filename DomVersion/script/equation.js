window.addEventListener("load",onLoaded);

function onLoaded(){
  var number1=document.querySelector("input[name='a']");
  var number2=document.querySelector("input[name='b']");
  var number3=document.querySelector("input[name='c']");
  var a=Number(number1.value);
  var b=Number(number2.value);
  var c=Number(number3.value);
  
  var result=document.getElementById("result");
  
  var form=document.querySelector("form");
  form.addEventListener("submit",function(event){
    event.preventDefault();
    
    equation(a,b,c,result);
  });
}

function equation(a,b,c,result) {
  //console.log(a+b+c);
  
  
  var x;
  var x1;
  var x2;
  var del;
  
        if (a===0 && b===0) {
          console.log("Not second grade equation");
          result.innerHTML="Not second grade equation";
        } else if (a===0) {
          x=(-1*c)/b;
          console.log("Result: ",x);
          result.innerHTML="Result: "+x;
        } else {
          del=(b*b)-(4*a*c);
          if (del>0) {
            x1=(-1*b+Math.sqrt(del))/(2*a);
            console.log("Root  1 :",x1);
            x2=(-1*b-Math.sqrt(del))/(2*a);
            console.log("Root  2 :",x2);
            result.innerHTML="Root  1 :"+x1+"<br>"+"Root  2 :"+x2;
          } else if (del===0) {
            x=(-1*b)/(2*a);
            console.log("When there is one result:",x);
            result.innerHTML="When there is one result:"+x;
          } else {
            console.log("The equation doesnt have a result on real numbers");
            result.innerHTML="The equation doesnt have a result on real numbers";
          }
  }
  
}






















