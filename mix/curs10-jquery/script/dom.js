$(window).on("load",loaded);

function loaded(){
  var firstTitle=$("h1");
  console.log(firstTitle);
  var par=$("#myparagraph");
  console.log(par);
  var secondTitle=$(".second-title");
  console.log(secondTitle);
  console.log(firstTitle.html());
  console.log(par.attr("id"));
  par.html("This is my first  try to change content trough Jquery");
  secondTitle.attr("class","sec-tit");
  console.log(secondTitle);
  firstTitle.html("We reached Jquery!!!");
  
  par.css("color","red");
  
  secondTitle.addClass("pres");
  console.log(secondTitle);
  
  
  }  
  
 var change=$("change");
  change.on("click",onchange(40));
  
  
  function onchange(size){
    document.body.style.fontSize=size+"px"; 
  }