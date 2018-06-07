window.onload=onLoaded;

function onLoaded(){
	let fname=document.querySelector("input[name='name']");
	let email=document.querySelector("input[name='email']");
	let age=document.querySelector("input[name='age']");

	let setbutton=document.getElementById("setter");
	let getbutton=document.getElementById("getter");
	let clearbutton=document.getElementById("clear");

	setbutton.addEventListener("click",(event)=>{
		event.preventDefault();
		setCookie(fname.value,email.value,age.value);
	});

	getbutton.addEventListener("click",(event)=>{
		event.preventDefault();
		getCookie();
	});

	clearbutton.addEventListener("click",(event)=>{
		event.preventDefault();
		clearField();
	});
}

function setCookie(name,email,age){
	const data={
		name:name,
		email:email,
		age:age
	};

	let strData=JSON.stringify(data);

	document.cookie="data="+strData+"; expires=Fri, 15 June 2018 01:00:00  UTC;";
}

function getCookie(){
	if(document.cookie.length !=0){
		//alert("This cookie exists");

		let cookieData=document.cookie.split("=");

		let data=JSON.parse(cookieData[1]);

		let fname=document.querySelector("input[name='name']");
		let email=document.querySelector("input[name='email']");
		let age=document.querySelector("input[name='age']");

		fname.value=data.name;
		email.value=data.email;
		age.value=data.age;


	}
	else{
		alert("This cookie doesn't exist");
	}
}

function clearField(){
	let fname=document.querySelector("input[name='name']");
	let email=document.querySelector("input[name='email']");
	let age=document.querySelector("input[name='age']");

	fname.value="";
	email.value="";
	age.value="";
}