window.onload=onLoaded();

function onLoaded(){
	const lists= new GameList();

	lists.fetchGames()
	.then(createList)
	.catch(errorMsg);

function createList(){
	console.log(lists.itemList);
	const elementContainer=document.getElementById("elemetContainer");
	for(let i=0;i<lists.itemList.length;i++){
		const gameEl=lists.itemList[i];
		//console.log(gameEl);
		const posts=document.createElement("div");

		posts.innerHTML="<a href="+basepath+"pages/DetailsPage.html?gameId="+
		gameEl._id+" target='_self'>"+
		"<img src="+gameEl.imageUrl+">"+"</a>"
		"<h2>"+gameEl.title+"</h2>"+
		"<button data-id="+gameEl._id+">Delete</button>";

		elementContainer.appendChild(posts);
	}

	
}

function errorMsg(xhr){
	console.log(xhr);
}

}

