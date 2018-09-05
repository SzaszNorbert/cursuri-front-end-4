var arr=[2,4,5,6,7,2,4,5,8,2,5,8,6,9,2,2,89,2,3,7,9];
var counter=0;
var pat=2;
for (var i=0;i<arr.length;i++) {
  if(arr[i]===pat) {
    counter++;
  }
}

console.log("The times 2 was found in the array is:",counter);