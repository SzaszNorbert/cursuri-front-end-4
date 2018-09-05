function rotate(arr){
	var a=[];
	var b=[];
	var c=[];
	var res=[];
	for(var i=0;arr.length!=0;i++){
		a=arr.shift();
		a.reverse();
		b.push(a);
	}
	console.log(b);
	for(var i=0;i<b.length;i++){
		for(var j=0;j<b[i].length;j++){
			c.push(b[j][i]);
		}

	}
	console.log(c);
	for(var i=0;c!=0;i++){
	res.push(c.splice(0,b.length));
}
console.log(res);
}

var arr=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
rotate(arr);