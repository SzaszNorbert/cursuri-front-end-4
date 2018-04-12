function countBs(x,y) {
  counter=0;
  var string = String(x);
  for(var i=0;i<string.length;i++) {
    if (string[i] === y) {
      counter++;
    }
  }
  return counter;
}

console.log(countBs("wubba lubba dub dub","u"));