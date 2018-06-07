window.onload=onLoaded;

function onLoaded(){
	let button=document.getElementById("get-cookie");
	button.addEventListener("click",()=>{
		getBack();
	});
	
	setBack();
}

function setBack(){
	let bchanger=document.getElementById("back-changer");
	bchanger.addEventListener("change",function(){
			if(bchanger.value != "Select a color"){
				document.body.style.backgroundColor=bchanger.value;
				document.cookie="color=" + bchanger.value + "; expires=Fri, 8 June 2018 01:00:00 UTC; path=/";
			}
		});
}

function getBack(){
	if(document.cookie.length != 0){
				let docArr=document.cookie.split("=");
				document.body.style.backgroundColor=docArr[1];
				let bchanger=document.getElementById("back-changer");
				bchanger.value=docArr[1];
	}
	else{
		alert("Non existing cookie!");
	}
}