window.onload=onLoaded;

function onLoaded(){
	const getNum=document.querySelector("input[name='your-range']");
	const getForm=document.querySelector("form");

	getForm.addEventListener("submit",function(event){
		event.preventDefault();
		if(getNum.value < 6){
			getNum.classList.add('border-red-style');
		}
		else if(getNum.value > 10){
			getNum.classList.add('border-red-style');
		}
		else {
			getNum.classList.remove('border-red-style');
			generateNumber(getNum.value);
		}
	});	
}

function generateNumber(num){
	const numArr=[];
	const postNumbers=document.getElementById("post-numbers");
	let posts="";
	for(let i=0;i<num;i++){
		const randomNum=Math.floor(Math.random()*90)+1;
		numArr.push(randomNum);
	}
	console.log(numArr);
	for(let i=0;i<numArr.length;i++){
		posts += numArr[i]+" ";
	}
	postNumbers.innerHTML=posts;
}