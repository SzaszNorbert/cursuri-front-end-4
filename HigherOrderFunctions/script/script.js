var arr=[23,34,45,56,78,98,87,76,65,54,43,32,21,123,234,463,234,652,689,126];

var cont=[{fname:"Alex",lname:"Mercer",age:34},
          {fname:"Dana",lname:"Mercer",age:29},
          {fname:"James",lname:"Heller",age:37},
          {fname:"Elizabeth",lname:"Green",age:22},
          {fname:"Joe",lname:"Swanson",age:40},
          {fname:"Rick",lname:"Sanchez",age:68},
          {fname:"Jerry",lname:"Sanchez",age:45}
         ];

// foreach for arr

arr.forEach(function(arr){
  console.log(arr);
})

// foreach for cont

cont.forEach(function(data){
  console.log(data.fname);
})


//this was the higher function foreach that is used for a faster cykling trough large amount of data


// filter for number array

const numFilter = arr.filter(numbers => numbers > 100);

console.log(numFilter);

//filter for cont

const famName=cont.filter(names => names.lname==="Mercer");

console.log(famName);

const filterAge=cont.filter(ages => (ages.age > 29 && ages.age < 68));

console.log(filterAge);

//here was the arrow function short version of a higher order filter function

//map

const justNames=cont.map(names => names.fname);

console.log(justNames);

const duplicateNumber=arr.map(number => number * 2);

console.log(duplicateNumber);


//here was ashorthand version of map higher function

//sort

const sortPeople=cont.sort((p1,p2) => (p1.age > p2.age ? 1 : -1));

console.log(sortPeople);

const sortNumber=arr.sort((a,b) => b-a);

console.log(sortNumber);

//this was the higher order function sortNumber


//reduce

const sumArr=arr.reduce((sum,number) => sum + number,0);

console.log(sumArr);

const totalAge=cont.reduce((total,ages) => total + ages.age,0);

console.log(totalAge);

//this was the reduce higher function which takes two parameters even for longer function version
// the first parameter is the executable function 
//the second parameter is the starting value of one of the arguments

//combinations

const combo=arr
.filter(number => number < 100)
.sort((a,b) => a-b)
.map(number => number / 10)
.reduce((total,number) => total + number,0);

console.log(combo);




//as we can see we can combine these functions to take data in different processes and produce a final data