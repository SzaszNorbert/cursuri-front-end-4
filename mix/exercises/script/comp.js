function comp(a,b) {
  if (a===b) {
    console.log("It is true because",typeof(a),"and",typeof(b),"is similar");
  }
  else {
    console.log("It is false because",typeof(a),"and",typeof(b),"is not similar");
  }
}
var a=prompt("Input your data:");
var b=prompt("Input your data:");
comp(a,b);