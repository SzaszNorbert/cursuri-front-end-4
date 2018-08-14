window.onload=onLoaded;

function onLoaded(){


	//make content change onclick
	const button=$('#content-part ul li');
	button.on('click',function(){
		//$('li').addClass('active').siblings().removeClass('active');
		$(this).siblings().removeClass('active');
		$(this).addClass('active');
	});

	//main functionalities

	const gameTitle=document.querySelector("input[name='title']");
	const gameImage=document.querySelector("input[name='image']");
	const gameDescription=document.querySelector("[name='description']");
	const gamePublisher=document.querySelector("input[name='publisher']");
	const gameGenre=document.querySelector("input[name='genre']");

	const form=document.querySelector('form');
	form.addEventListener('submit',(event)=>{
		event.preventDefault();

		createGame(gameTitle.value,gameImage.value,gameDescription.value,gamePublisher.value,gameGenre.value);
	});



	const lists= new GameList();
	lists.fetchGames()
	.then(createList)
	.catch(errorMsg);

	function createList(){
	console.log(lists.itemList);
	//creating the list to view
	const elementContainer=document.getElementById("elemetContainer");
	for(let i=0;i<lists.itemList.length;i++){
		const gameEl=lists.itemList[i];
		//console.log(gameEl);
		const posts=document.createElement("div");

		posts.innerHTML="<a href="+basepath+"pages/DetailsPage.html?gameId="+
		gameEl._id+" target='_self'>"+
		"<img src="+gameEl.imageUrl+">"+"</a>"+
		"<h2>"+gameEl.title+"</h2>"+
		"<button data-id="+gameEl._id+" name='remove' class='remove'>Delete</button>";

		elementContainer.appendChild(posts);
		}
	}

	function errorMsg(xhr){
		console.log(xhr);
	}

	//post new game

	function createGame(title,image,description,publisher,genre){
		console.log(title,image,description,publisher,genre);
		const data={
			title:title,
			genre:genre,
			publisher:publisher,
			imageUrl:image,
			description:description
		};

		const gameData=new Game();

		gameData.postNewGame(data)
		.then(()=>{
			alert("success");
		})
		.catch((xhr)=>{
			alert(xhr);
		})
	}

	//delete a game from the list

	$('#elemetContainer').delegate('.remove','click',function(){
		const id=this.getAttribute('data-id');
		
		const deleteGame=new Game();
		deleteGame.deleteGame(id);
	});


	
}
