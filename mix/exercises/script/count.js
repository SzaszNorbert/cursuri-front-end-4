function countBs(x) {
  counter=0;
  var string = String(x);
  for(var i=0;i<string.length;i++) {
    if (string[i] == "b") {
      counter++;
    }
  }
  return counter;
}

console.log(countBs("abcbbduygdbbbbbghsdobsoshdiubAOUSHFODBbbbbbbbbbb"));