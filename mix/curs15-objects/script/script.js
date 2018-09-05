window.onload=onLoaded;

function onLoaded(){
	var fname=document.querySelector("input[name='fname']");
	var lname=document.querySelector("input[name='lname']");
	var age=document.querySelector("input[name='age']");
	var height=document.querySelector("input[name='height']");
	var weight=document.querySelector("input[name='weight']");

	var form=document.querySelector("form");
	form.addEventListener("submit",function(event){
		event.preventDefault();

		makeElements(fname.value,lname.value,age.value,height.value,weight.value);
	});
}

function makeElements(fname,lname,age,height,weight){
	//console.log("Input data:",fname,lname,age,height,weight);
	var data={
		fname:fname,
		lname:lname,
		age:age,
		height:height,
		weight:weight
	};
	//console.log("object data",data);

	function getData(data){
		this.data=data || {};
		this.fname=data.fname || "";
		this.lname=data.lname || "";
		this.age=data.age || 0;
		this.height=data.height || 0;
		this.weight=data.weight || 0;
	}

	getData.prototype.Bmi=function(){
		bmi=this.weight/(this.height*this.height);
		console.log("Persons bmi is: ",bmi);
		var par=document.createElement('p');
		par.classList.add("customize-p");
		par.innerHTML=this.fname+'\'s bmi is: '+bmi;
		section.appendChild(par);
	}

	var person = new getData(data);
	console.log("new object",person);

	var section=document.getElementById("content");
	var article=document.createElement('article');
	article.classList.add("customize");
	article.innerHTML='<p>'+'First-Name: '+person.fname+'</p>'+
	'<p>'+'Last-Name: '+person.lname+'</p>'+
	'<p>'+'Age: '+person.age+'</p>'+
	'<p>'+'Height: '+person.height+'</p>'+
	'<p>'+'Weighr: '+person.weight+'</p>';
	section.appendChild(article);

	person.Bmi();
}
