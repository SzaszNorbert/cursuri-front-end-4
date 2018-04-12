function fg(a,b,c) {
  var x;
  var x1;
  var x2;
  var del;
  if (a===0 && b===0) {
    console.log("Nem masodfoku egyenlet");
  } else if (a===0) {
    x=(-1*c)/b;
    console.log("Megoldas: ",x);
  } else {
    del=(b*b)-(4*a*c);
      if (del>0) {
        x1=(-1*b+Math.sqrt(del))/(2*a);
        console.log("Gyok  1 :",x1);
        x2=(-1*b-Math.sqrt(del))/(2*a);
        console.log("Gyok  2 :",x2);
      } else if (del===0) {
        x=(-1*b)/(2*a);
        console.log("Amikor egy a megoldas:",x);
      } else {
        console.log("Az egyenletnek nincsen gyoke a valos szamok halmazan")
      }
  }
}

var x=prompt("Add meg az \"x\" szamot");
var y=prompt("Add meg az \"y\" szamot");
var z=prompt("Add meg az \"z\" szamot");


fg(x,y,z);