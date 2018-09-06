window.onload=onLoaded;

function onLoaded(){


	//make content change onclick
	const buttonAbout=$('#about');
	const buttonOffer=$('#offer');
	buttonAbout.on('click',function(){
		$(this).addClass('button-active');
		$('#offer').removeClass('button-active');
		$('#about-content').removeClass('display-none').addClass('display-active');
		$('#offer-content').removeClass('display-active').addClass('display-none');
	});

	buttonOffer.on('click',function(){
		$(this).addClass('button-active');
		$('#about').removeClass('button-active');
		$('#offer-content').removeClass('display-none').addClass('display-active');
		$('#about-content').removeClass('display-active').addClass('display-none');
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

		posts.setAttribute("class","col-xs-12 col-sm-6 col-md-4 col-lg-4");

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

	//show/hide post part

	const postButton=$("#show-form");
	const hideButton=$("#hide-form");
	
	postButton.on('click',function(event){
		event.preventDefault();
		$(this).removeClass('display-active').addClass('display-none');
		$('#game-form').removeClass('display-none').addClass('display-active');
	});
	hideButton.on('click',function(event){
		event.preventDefault();
		$('#game-form').removeClass('display-active').addClass('display-none');
		$('#show-form').removeClass('display-none').addClass('display-active');
	});
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
