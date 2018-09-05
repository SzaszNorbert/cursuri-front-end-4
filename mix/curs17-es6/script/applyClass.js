window.addEventListener("load",onLoaded);

function onLoaded(){
	let fname=document.querySelector("input[name='fname']");

	let lname=document.querySelector("input[name='lname']");

	let age=document.querySelector("input[name='age']");

	let pweight=document.querySelector("input[name='weight']");

	let pheight=document.querySelector("input[name='height']");

	var greet=document.getElementById("greet");

	let form=document.querySelector("form");
	form.addEventListener("submit",function(event){
		event.preventDefault();
		


 		if(fname.value==="") {
     		 fname.style.border="1px solid red";
    	}
    	else if (lname.value==="") {
      		lname.style.border="1px solid red";
    	}
   	 	else if(age.value==="") {
      		age.style.border="1px solid red";
   		 }
   		 else if(pweight.value==="") {
      		pweight.style.border="1px solid red";
   		 }
   		 else if(pheight.value==="") {
      		pheight.style.border="1px solid red";
   		 }
    	else {
		      fname.style.border="none";
		      lname.style.border="none";
		      age.style.border="none";
		      pweight.style.border="none";
		      pheight.style.border="none";
		      createEntry(fname.value,lname.value,age.value,pweight.value,pheight.value,greet);
    	}



	})

}

function createEntry(fname,lname,age,weight,height,greet){
	//console.log(fname,lname,age);
	const data={
		firstName:fname,
		lastName:lname,
		age:age,
		personWeight:weight,
		personHeight:height
	};

	let me=new PersonalData(data);
	
	greet.style.backgroundColor="green";
  	greet.style.color="white";
  	greet.fontSize="35px";
  	greet.style.padding="10px";
  	greet.style.borderRadius="20px";
  	greet.style.textAlign="center";
  	greet.innerHTML=me.pres;

  	console.log(me.personBMI);
}
