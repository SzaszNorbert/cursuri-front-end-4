var arr=["a","b","c","d","e"];
function reverse(arr) {
  var rev=[];
  for(var i = arr.length-1;i >= 0;i--) {
    rev.push(arr[i]);
  }
  return rev;
}
console.log(reverse(arr));

function back(input) {
  var arr=[];
  for(var i = input.length-1;i >= 0;i--) {
    arr.push(input[i]);
  }
  return arr;
}

console.log(back(reverse(arr)))