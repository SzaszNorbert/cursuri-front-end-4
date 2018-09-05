function printMessage() {
  console.log("Figyelj oda jobban !!!!!!");
}

printMessage();

function print(message) {
  console.log(message);
}
print();

print("My first functions with parameters");

function printUser(name,gender,weight,height) {
    var bmi;
    bmi = weight/(height*height);
  

      if (bmi<18.5) {
        console.log(name,"|",gender,"|BMI:",bmi,"|","underweight");
      } else if(bmi>18.5 && bmi<25) {
        console.log(name,"|",gender,"|BMI:",bmi,"|","normal");
      } else if(bmi>25 && bmi<30) {
        console.log(name,"|",gender,"|BMI:",bmi,"|","overweight");
      } else {
        console.log(name,"|",gender,"|BMI:",bmi,"|","obese");
      }
}

//printUser("Ana","f",55,1.6);
//printUser("Ion","M",180,1.8);

var persons = [
  {
    name:"Ana",
    gender:"F",
    height:1.6,
    weight:60
  },
  {
    name:"Ion",
    gender:"M",
    height:1.8,
    weight:180
  },
  {
    name:"Norbi",
    gender:"M",
    height:1.6,
    weight:76
  },
  {
    name:"Zsolti",
    gender:"M",
    height:1.56,
    weight:79
  },
   {
    name:"Zsolta",
    gender:"M",
    height:1.80,
    weight:80
  },
   {
    name:"Zsoltika",
    gender:"M",
    height:1.90,
    weight:91
  }
];

for(var i=0;i<persons.length;i++){
  printUser(persons[i].name,persons[i].gender,persons[i].weight,persons[i].height);
}










function computeSum(a,b) {
  console.log("sum",a+b);
  a="My special number";
  console.log(a);
}

computeSum(2,3);//5,my special number

var a=2;
var b=3;

computeSum(a,b);

console.log(a);//2 marad
//even if a is modified inside a function its value its not changed outside
//a is sent trough value


function computeFullName(brc) {
  console.log(brc.first+" "+brc.last);
  brc.last ="Because I'm Batman!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!";
  console.log(brc.last);//Batman
}

var brc = {
  first:"Bruce",
  last:"Wayne"
};

computeFullName(brc);//Bruce Wayne,Batman

console.log(brc.last);//Batman


//name is sent by reference
//content is changed








