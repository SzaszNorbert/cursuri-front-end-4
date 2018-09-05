window.addEventListener("load",onLoaded);

function onLoaded(){
  
  var number=document.querySelector("input[name='user-input']");
  var result;
  var form=document.querySelector("form");
  form.addEventListener("submit",function(event){
    event.preventDefault();
    result=Number(number.value);//Number is a built in function which converts strings to number
    exec(result);
  });
}

function exec(number) {
  console.log(number);
  
  number +=10;
  console.log(number);
  
  number -=2;
  console.log(number);
  
  number *=15;
  console.log(number);
  
  number /=3;
  console.log(number);
}



