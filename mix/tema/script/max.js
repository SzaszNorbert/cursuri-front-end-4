var arr=[34,456,235,123,324,567,237,67,234,56,23,765,345,568,653,11];
var num=arr[0];
for (var i=0;i<arr.length;i++) {
  if(num<arr[i]) {
    num=arr[i]
  }
}
console.log("Max is:",num);

for (var i=0;i<arr.length;i++) {
  if(num>arr[i]) {
    num=arr[i]
  }
}
console.log("Minimal is:",num);