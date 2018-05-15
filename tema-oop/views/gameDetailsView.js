window.onload=function(){
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
			
			postDetailsContainer.appendChild(postTitleEl);
			postDetailsContainer.appendChild(postBodyEl);
		}

		function errorMsg(xhr){
			console.log('Something happened:',xhr);
		}


		/*** It retrieves a query (URL) parameter value** 
		It expects you to send the parameter key(before '=')* **/
		function getUrlParameter(name) {
		name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
		var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
		var results = regex.exec(location.search);
		return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
		};
}