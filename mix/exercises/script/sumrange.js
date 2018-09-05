var arr=[];

function range(x,y) {
  for(var i=x;i<=y;i++) {
    arr.push(i);
  }
  return arr;
}
/*
//if keeping this bugs you it is beacuse it creates array first ,then again in the lower fuinction and the sum duplicates
*/
function sum(x) {
  var sum=0;
  for (var i=0;i<x.length;i++) {
    sum+=x[i];
  }
  return sum;
}

console.log(sum(range(1,10)));

console.log("The array of the sum above:",range(1,10));//the order in which the functions are called matters so attention!!!!!!
