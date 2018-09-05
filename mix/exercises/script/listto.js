var list = {
  value :1,
  rest  : {
    value :2,
    rest  : {
      value :3,
      rest  :null
    }
  }
};

function tolist(arr) {
  for(var i=0;i<=arr.length;i++) {
    list={value:arr[i],rest:list};
  }
  return list;
}
console.log(list);
console.log(tolist([4,5,6,7,8,9]));