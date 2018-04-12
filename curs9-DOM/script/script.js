var a=2;//global variable never forget that

function displayVariables(){
  var b=3;//local variable
  c=4;//window.c=4 ez globalis lessz ezaltal a localis valtozok melett!!!!!
  console.log("a inside function:",a);//2
  console.log("b inside function:",b);//3
  console.log("c inside function:",c);//4
}

displayVariables();

console.log("a outside function:",a);//2
console.log("b outside function:",typeof b);//Uncaught ReferenceError: b is not defined
console.log("c outside function:",c);//4

//--------------------------------------------------------------------------------------------

var x=1;//global;

function firstFunction() {
  var y=2;//local into firstFunction
  function secondFunction(){
    var z=3;//local into secondFunction
    
    console.log("Second x=",x);//1
    console.log("Second y=",y);//2
    console.log("Second z=",z);//3
    
    function thirdFunction(z) {
      z=5;//parameterkent van meghatarozva funkcioban ezert nem globalis!!!!mint window.z=valami
      console.log("Third x=",x);//1
      console.log("Third y=",y);//2
      console.log("Third z=",z);//5
    }
    
    thirdFunction(z);
  }
  
  secondFunction();
  console.log("First x=",x);//1
  console.log("First y=",y);//2
  console.log("First z=",typeof z);
}

firstFunction();

//------------------------------------------------------------------------------------------------

(function demoHoisting(){
  var a=1000;
  console.log(a+" "+b);
  var b=2000;
})();//IIFE immediately invoke function expression

//this is identical with 

(function demoHoisting(){
  var a=1000;
  var b;
  console.log(a+" "+b);
  b=2000;
})();//IIFE immediately invoke function expression





















