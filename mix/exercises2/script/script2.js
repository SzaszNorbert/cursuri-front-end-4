function rotate(array,rotationTime,key){
	array.sort();
	console.log(rotationTime);
	for(var i=0;i<rotationTime;i++){
	array.push(array.shift());
	console.log(array);
	}
	console.log("Position of provided key:",array.indexOf(key));
}

var arr=[1,2,3,4,5,6,7,8,9,10];
var rot=Math.floor(Math.random()*10);
rotate(arr,rot,6);
