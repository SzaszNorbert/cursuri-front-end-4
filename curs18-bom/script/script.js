window.onload=onLoaded;

function onLoaded(){
	//window width height properties
	console.log(window.innerHeight);
	console.log(window.innerWidth);
	console.log(window.outerHeight);
	console.log(window.outerWidth);

	//window screen properties
	console.log(window.screen);
	console.log(window.screenX);
	console.log(window.screenY);
	console.log(window.fullScreen);

	//window generic methods
	let opwin=document.getElementById("open-window");
	opwin.addEventListener("click",function(event){
		event.preventDefault();
		window.open('https://www.google.com/#cns=1','probe','width=300, height=250 scrollbars=1');
	});

	//timing events
	let sta=document.getElementById("rep-obj");
	let sto=document.getElementById("stop-obj");

	let Inter
	sta.addEventListener("click",function(event){
		event.preventDefault();
		Inter=setInterval(function (){
			console.log("2 seconds");
		},2000);
	});

	sto.addEventListener("click",function(event){
		event.preventDefault();
		clearInterval(Inter);
	});

	//location model
	console.log(location.href);
	console.log(location.protocol); 
	console.log(location.host); 
	console.log(location.hostname); 
	console.log(location.port); 
	console.log(location.pathname); 
	console.log(location.search);
	console.log(location.hash); 
	console.log(location.origin);    
	
	//history object model
	console.log(history.length);
	console.log(history.state);   

}
