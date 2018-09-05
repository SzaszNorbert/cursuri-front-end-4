function chan(size,fam,weight,col,bac,stil){
  return function(){//closure function with predefined statements
    document.body.style.fontSize=size+"px";
    document.body.style.fontFamily=fam;
    document.body.style.fontWeight=weight;
    document.body.style.color=col;
    document.body.style.backgroundColor=bac;
    document.body.style.fontStyle=stil;
  };
}//closure + dom manipulation
var size1 = chan(20,"verdana","bold","green","blue","normal");//closure and assigning alues
var size2 = chan(25,"courier new","normal","blue","red","italic");
var size3 = chan(30,"serif","bold","red","green","oblique");
var size4 = chan(35,"sans-serif","normal","grey","silver","normal");
var size5 = chan(40,"georgia","bold","yellow","tomato","italic");
var size6 = chan(45,"lucida console","normal","tomato","orange","oblique");
var size7 = chan(50,"arial","bold","white","black","normal");
var size8 = chan(55,"times new roman","normal","lightblue","darkgreen","italic");
//assign to buttons
document.getElementById("change1").onclick = size1;
document.getElementById("change2").onclick = size2;
document.getElementById("change3").onclick = size3;
document.getElementById("change4").onclick = size4;
document.getElementById("change5").onclick = size5;
document.getElementById("change6").onclick = size6;
document.getElementById("change7").onclick = size7;
document.getElementById("change8").onclick = size8;