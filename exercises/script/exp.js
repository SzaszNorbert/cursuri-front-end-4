function looping(s,d,a) {//outer function
  var res=[];
  var sum=0;
  function exec(){//inner function
      /*for(var i=0;i<a.length;i++) {
        res[i]=d(a[i]);
        sum+=s(a[i]);
      }
      console.log("the duplicate is: ",res);
      console.log("the sum is : ",sum);*/
    
    //obs.: use independent names from declared variables or you might get trouble!!!!!
    function summa(){//most nested
        for(var i=0;i<a.length;i++) {
        sum+=s(a[i]);}
        console.log("the sum is : ",sum);
    }//most nested end
        function result(){//most nested
        for(var i=0;i<a.length;i++) {
        res[i]=d(a[i]);}
        console.log("the duplicate is: ",res);
    }//most nested end
   summa();//call of most nested function
   result(); //call of most nested function
  }//inner function
  exec();//inner function call
}//outer function


//-----------------------------
// here comes two expression functions which will be passed as arguments
var d=function(x) {
  return x*x;
}

var s=function(x) {
  return x;
} 


//----------------------------
// here is a function which takes an outer parameter from keyboard
function a(end) {
  var arr=[];
  for (var i=0;i<=end;i++) {
    arr.push(i);
  }
  return arr;
}

var end;
end=prompt("How should the loop end?");

looping(s,d,a(end));

