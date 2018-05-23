window.onload=function(){
	var titleGame=document.querySelector("input[name='title-input']");
	var descriptionGame=document.querySelector("[name='description-input']");
	var imageGame=document.querySelector("input[name='img-input']");

	var currentGame=new Game();
	var currentPostId=getUrlParameter('gamePostId');
	console.log(currentPostId);

		currentGame.fetchData(currentPostId)
		.then(createDetails)
		.catch(errorMsg);

		// callbacks for promise chain
		function createDetails(){
			console.log(currentGame);
			var postDetailsContainer=document.getElementById('contain-detail');
			//create title element
			var postTitleEl=document.createElement('h3');
			postTitleEl.innerHTML=currentGame.title;
			//create body element
			var postBodyEl=document.createElement('p');
			postBodyEl.innerHTML=currentGame.description;
			//create img element
			var imgGame=document.createElement('img');
			imgGame.setAttribute('src',currentGame.imageUrl);

			
			postDetailsContainer.appendChild(postTitleEl);
			postDetailsContainer.appendChild(postBodyEl);
			postDetailsContainer.appendChild(imgGame);

			
		}

		function errorMsg(xhr){
			console.log('Something happened:',xhr);
		}
		//select the data for updating

		var editButton=document.getElementById("edit-data");
			editButton.addEventListener("click",function(event){
				event.preventDefault();
				titleGame.value=currentGame.title;
				descriptionGame.value=currentGame.description;
				imageGame.value=currentGame.imageUrl;
			});

		//here comes the actual update function !!!

			var updateButton=document.getElementById('save-edit');
			updateButton.addEventListener("click",function(event){
				event.preventDefault();
				var id=getUrlParameter('gamePostId');
				console.log(id);
				var gameTitle=document.querySelector("input[name='title-input']");
				var gameDescription=document.querySelector("[name='description-input']");
				var gameImg=document.querySelector("input[name='img-input']");
				var data={
					title:gameTitle.value,
					description:gameDescription.value,
					imageUrl:gameImg.value
				};
				console.log(data);
				var updateGame=new Game();
				updateGame.updateGameData(id,data);

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