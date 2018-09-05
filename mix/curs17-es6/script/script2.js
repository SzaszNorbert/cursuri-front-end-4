//variable hoisting

var isValid=true;
let isValid2=true;
/*function validate(inputString){
	//isValid is a global variable - defined outside of function
	console.log(isValid);
	//error variable is hoisted moed at the beginning of the function
	//no throw error just undefined
	console.log(error);
	if(inputString.length===0){
		isValid=false;
		var error=true;
		console.log('String is not valid');
		console.log(isValid);
		console.log(error);
	}
}*/

//validate('');

//console.log(isValid);

//let isValid2=true;
/*function validate(inputString){
	console.log(isValid2);
	//this wil throw an error since const/let declared variables
	//are not hoisted-they can't be used before they are declared
	//console.log(error);
	if(inputString.length===0){
		isValid2=false;
		const error=true;
		console.log('String is not valid');
		console.log(isValid2);
		console.log(error);
	}
}
validate('');

console.log("global",isValid2);
console.log(error);*/

// const validate = inputString => {
// 	console.log(isValid2);
// 	//this wil throw an error since const/let declared variables
// 	//are not hoisted-they can't be used before they are declared
// 	//console.log(error);
// 	if(inputString.length===0){
// 		isValid2=false;
// 		const error=true;
// 		console.log('String is not valid');
// 		console.log(isValid2);
// 		console.log(error);
// 	}
// };
//since validate is declared using const keyword the variable is not hoisted 
//we are not able to call function before it is declared
//validate('');

// console.log("global",isValid2);
// console.log(error);

//this is in arrow functions

function expire(){
	this.isExpired=false;
	setTimeout(()=>{
		this.isExpired=true;
	},4000);
	return this.isExpired;
}

const expire2=expire.bind({});

console.log(expire2());