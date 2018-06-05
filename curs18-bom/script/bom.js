//timeouts
/*const setTimeoutId=setTimeout(()=>{
	console.log("Hey from setTimeout");
	//stops the interval for setIntervalId
	clearInterval(setIntervalId);
},8000);
//outputs the timeout id,which is a random number
console.log(setTimeoutId);

let sum=0;
const setIntervalId=setInterval(()=>{
	sum+=1;//sum=sum+1
	console.log(sum);
},1000);

window.addEventListener("unload",()=>{
	//teardown
	//this statement is used for debugging,the code will automatically stop there is browser console is opened
	debugger;
	clearTimeout(setTimeoutId);
});*/


//play with local storage
//set string in local storage

window.localStorage.setItem("key1","Ding Dong");

const user={
	name:"John",
	lastName:"doe",age:34
};
//set an object inlocal storage
//we need to transform object to a readable string before savong it in local storage
localStorage.setItem("userData",JSON.stringify(user));
//get a string from local storage

const key1Val=localStorage.getItem("key1");


console.log(key1Val);

const userData=localStorage.getItem("userData");
//we need to transform the string returned back to a readable object
const userDataObj=JSON.parse(userData);
//update user object

userDataObj.age=22;
//console.log(userDataObj.age);
//in order to update entry in localstorage you have to use the same key when calling set item so the valu will be overwritten
localStorage.setItem("userData",JSON.stringify(userDataObj));

//delete item from localstorage

localStorage.removeItem("key1");