// alert("My first alert from different file(from Outland!!!)");//
var x;
x = 2;
console.log(x);

//numbers
var age=26;
console.log("My age is",age);

var price=4.99;
console.log("The price is",price+"$");

//strings

var fullName="Szasz Norbert Zsolt";
console.log("My name is",fullName);

var paragraph="Line1 \n Line2";//\n new line character
console.log(paragraph);

var backslash ="variable with \\";
console.log(backslash);

var quotes="\"This is a string inside quotes\"";
console.log(quotes);

var differentquotes='"another string inside quote"';
console.log(differentquotes);
//boolean
var isTrue=true,isFalse=false;
console.log(isTrue,isFalse);

//null
var nullValue=null;
console.log("Null value",nullValue);

//undefined
var undefinedValue;
console.log("undefinedvalue",undefinedValue);

//expressions
var x=2;
console.log(x);
x=undefined;
console.log(x);

//operators
console.log(43%10);
console.log(2=='2');
console.log(2==='2');//verifica valoarea si tipul valoarei
console.log(2===2);
//logical operators

console.log(typeof 10);
console.log(typeof "text");
console.log(typeof true);
console.log(typeof false);
console.log(typeof myVariable);
console.log(typeof nullValue);

var n=10;
var isPositive = n > 0 ? true : false;
console.log(isPositive);

var n=0;
var isPositive = n > 0 ? true : false;
console.log(isPositive);

var n=-10;
var isPositive = n > 0 ? 1 : 0;
console.log(isPositive);

// expressions

var p=1+1;
var q=p*2;
console.log(p,q);

var firstName="Chuck";
var lastName="Norris";
var fullName=firstName+" "+lastName;
console.log("fullName", fullName);
//aray
var names = ['serban','marcus','alex','razvan','diana','norbert','tamas'];

console.log(names[3]);
console.log(names.sort());
console.log("length",names.length);



//object
var robot = {
  model:'TRX1000',
  color:'red',
  //color:'blue' having duplicate keys in same object is incorrect
  "full name":"TX-888 edition",
  walk: function() {
    console.log("Robot is walking on the street singing.");
  }
};

console.log('color', robot.color);
console.log('full name', robot["full name"]);//indexxel hivjuk meg az effajta kulcsot
robot.walk();

//statements

var color = "red";//console.log(color)

if (color === "red") {
  console.log("red color");
} else {
  console.log("not red");
}


 color = "redx";//console.log(color)

if (color === "red") {
  console.log("red color");
} else {
  console.log("not red");
}
//indexof  returns the position of a given element in a string
var email="melania.moldovan@scoalainformala.ro";
if (email.indexOf("@") > -1) {
  console.log("email correct");
} else {
  console.log("email incorrect");
}
console.log("index",email.indexOf("@"));
email="melania.moldovan";
if (email.indexOf("@") > -1) {
  console.log("email correct");
} else {
  console.log("email incorrect");
}

var weather ="sunny";

switch(weather) {
  case 'rainy':
    console.log("Bring an umbrella");
    break;
  case 'cloudy':
    console.log("Dress lightly");
    break;
  case 'sunny':
    console.log("Go outside");
    break;
  default:
    console.log("Unknown weather type");
    break;
}
//ctrl+d kivalaszt minden kivalasztast
//with prompt data introduction
/* weather =prompt("Introduce a weather type");

switch(weather) {
  case 'rainy':
    console.log("Bring an umbrella");
    break;
  case 'cloudy':
    console.log("Dress lightly");
    break;
  case 'sunny':
    console.log("Go outside");
    break;
  default:
    console.log("Unknown weather type");
    break;
}*/

var i=0;
while(i<10) {
  console.log("number", i);
  i++;
}
console.log("while done");


var j = 15;
do {
  console.log("j",j);
  j++;
} while(j<10);

console.log("do while done");

for(var i=0;i<10;i++){
  console.log("i",i);
}
console.log("for done");

var arr=[4,6,8,-2,5];

for(var i=0;i<arr.length;i++) {
  console.log("position",i);
  console.log(arr[i]);
}



