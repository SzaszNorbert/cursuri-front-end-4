window.onload=onLoaded;

function onLoaded(){
		const gameTitle=document.querySelector("input[name='title']");
		const gameImage=document.querySelector("input[name='image']");
		const gameDescription=document.querySelector("[name='description']");
		const gamePublisher=document.querySelector("input[name='publisher']");
		const gameGenre=document.querySelector("input[name='genre']");
	
		const currentPostId=getUrlParameter('gameId');
		console.log(currentPostId);


		const postDetails=new Game();
		postDetails.fetchDetail(currentPostId)
		.then(createGamePost)
		.catch(ErrorMsg);

		function createGamePost(){
			console.log(postDetails);
			const containEl=document.getElementById("detailContainer");

			const titleEl=document.createElement("h2");
			titleEl.innerHTML=postDetails.title;

			const imgEl=document.createElement("img");
			imgEl.setAttribute('src',postDetails.imageUrl);

			const descEl=document.createElement("p");
			descEl.innerHTML=postDetails.description;

			const genEl=document.createElement("p");
			genEl.innerHTML="Genre: "+postDetails.genre;

			const pubEl=document.createElement("p");
			pubEl.innerHTML="Publisher: "+postDetails.publisher;

			containEl.appendChild(titleEl);
			containEl.appendChild(imgEl);
			containEl.appendChild(descEl);
			containEl.appendChild(genEl);
			containEl.appendChild(pubEl);

		}


		function ErrorMsg(xhr){
			console.log(xhr);
		}

		//show/hide update section

		updateButton=$('#update-game');
		cancelButton=$('#cancel-update');

		updateButton.on('click',function(event){
			event.preventDefault();
			$(this).removeClass('display-active').addClass('display-none');
			$('#submitNewElement').removeClass('display-none').addClass('display-active');
		});
		cancelButton.on('click',function(event){
			event.preventDefault();
			$('#submitNewElement').removeClass('display-active').addClass('display-none');
			$('#update-game').removeClass('display-none').addClass('display-active');
		});

		//update an existing game

		const editGame=document.getElementById("gameEdit");
		editGame.addEventListener("click",(e)=>{
			e.preventDefault();
			gameTitle.value=postDetails.title;
			gameImage.value=postDetails.imageUrl;
			gameDescription.value=postDetails.description;
			gamePublisher.value=postDetails.publisher;
			gameGenre.value=postDetails.genre;
		});

		//update the selected game

		const saveGame=document.getElementById("gameSave");
		saveGame.addEventListener("click",(e)=>{
			e.preventDefault();
			const id=getUrlParameter('gameId');
			//console.log(id);
			const gameTitle=document.querySelector("input[name='title']");
			const gameImage=document.querySelector("input[name='image']");
			const gameDescription=document.querySelector("[name='description']");
			const gamePublisher=document.querySelector("input[name='publisher']");
			const gameGenre=document.querySelector("input[name='genre']");

			const data={
				title:gameTitle.value,
				imageUrl:gameImage.value,
				description:gameDescription.value,
				publisher:gamePublisher.value,
				genre:gameGenre.value
			};
			//console.log(data);
			const update=new Game();
			update.updateGame(id,data);
		});


		/*** It retrieves a query (URL) parameter value** 
		It expects you to send the parameter key(before '=')* **/
		function getUrlParameter(name) {
		name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
		var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
		var results = regex.exec(location.search);
		return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
		};
}