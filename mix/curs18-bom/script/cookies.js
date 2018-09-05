//console.log(document.cookie);

//set cookie

document.cookie = "color=green";
//document.cookie="lang=en-US";

//get cookies

console.log(document.cookie);

const getCookies=()=>{
	const cookieItem={};
	const cookiesString = document.cookie;
	const separatedEntries=cookiesString.split(";");
	separatedEntries.forEach((entry)=>{
		//entry <=> color=green
		const trimmedEntry=entry.trim();
		//trim removes space from entry
		const splitEntry=trimmedEntry.split("=");
		//splitEntry['color','green']
		
		cookieItem[splitEntry[0]]=splitEntry[1];
		//cookieItem<=>{'color','green'}
	});
	return cookieItem;
	//console.log(separatedEntries);
}

//console.log(getCookies());


window.onload=()=>{
	//check the radionbutton for lang retrieved from cookies
	const cookies=getCookies();
	const userLang=cookies.lang;
	if(userLang){
		document.querySelector(`[value=${userLang}]`).setAttribute('checked',true);
	}

	//update cookies when user changes lang option

	let radioBtns=document.querySelectorAll('input[type=radio]');
	
	/*
	for(var i=0;i<radioBtns.lentgh;i++){
		radioBtns[i].addEventListener("change",(e)=>{
			const newLang=e.target.value;//en-US
			document.cookie='lang='+newLang;//`lang=${newLang}`
		});
	}
	*/

	radioBtns.forEach((btn)=>{
			btn.addEventListener("change",(e)=>{
			const newLang=e.target.value;//en-US
			document.cookie='lang='+newLang;//`lang=${newLang}`
		});
	});
	
}