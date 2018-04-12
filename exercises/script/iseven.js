function isEven(x) {
  if ((x > 0) && (x % 2 === 0)) {
    return true;
  }
  else if ((x > 0) && (x % 2 == 1)) {
    return false;
  }
  else {
    return x = "??";
  }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));