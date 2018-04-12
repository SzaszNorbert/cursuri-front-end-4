function outer (x){
  var szoveg="en bent vagyok!!!";
  var inner=function(y){
    console.log(y+" "+x);
  }
  
  return inner;
}

var valami=outer("vilag");
valami("hello");