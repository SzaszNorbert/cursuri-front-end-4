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
    name:"Zsolt",
    gender:"M",
    height:1.56,
    weight:74
  }
];

var bmi;
for (var i=0;i<persons.length;i++) {
var pers=persons[i];//this will be currentperson in the loop
bmi = pers.weight/(pers.height*pers.height);

  if (bmi<18.5) {
    console.log(pers.name,"|",pers.gender,"|BMI:",bmi,"|","underweight");
  } else if(bmi>18.5 && bmi<25) {
    console.log(pers.name,"|",pers.gender,"|BMI:",bmi,"|","normal");
  } else if(bmi>25 && bmi<30) {
    console.log(pers.name,"|",pers.gender,"|BMI:",bmi,"|","overweight");
  } else {
    console.log(pers.name,"|",pers.gender,"|BMI:",bmi,"|","obese");
  }
}

//talalt