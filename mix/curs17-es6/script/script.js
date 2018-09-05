window.onload=function(){
console.log('log 1');

/*var veryImportantPromise=new Promise(function(resolve,reject){
	setTimeout(function(){
	console.log('log from set timeout');
	resolve();
},10000);
});

veryImportantPromise.then(function(){
	console.log('log from then function');
}).catch(function(){
	console.log('log from catch function');
});
*/

var importantPromise=new Promise(function(resolve,reject){
	document.getElementById("important").addEventListener("click",function(){
		resolve();
	});

	document.getElementById("cancel").addEventListener("click",function(){
		reject();
	});
});

importantPromise
.then(function(){
	console.log('Go cookies!');
})
.catch(function(){
	console.log('No cookies');
});


function sum(a,b){
	console.log(this);
	return a+b;
}

var sumCopy=sum.bind({atr1:true},5,6);
sumCopy();
var rez=sumCopy();
console.log(rez);
}