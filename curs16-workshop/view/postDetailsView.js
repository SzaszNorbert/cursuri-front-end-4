window.onload=function(){
		var currentPost=new Post();
		var currentPostId=getUrlParameter('postId');
		//console.log(currentPostId);

		currentPost.fetchData(currentPostId)
		.then(createDetails)
		.catch(errorMsg);

		// callbacks for promise chain
		function createDetails(){
			//console.log(currentPost);
			var postDetailsContainer=document.getElementById('post-details');
			//create title element
			var postTitleEl=document.createElement('h3');
			postTitleEl.innerHTML=currentPost.title;
			//create body element
			var postBodyEl=document.createElement('p');
			postBodyEl.innerHTML=currentPost.body;
			postDetailsContainer.appendChild(postTitleEl);
			postDetailsContainer.appendChild(postBodyEl);
		}

		function errorMsg(xhr){
			console.log(xhr);
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

//legyen egy comment is !!!!!!!!!!!!!!!!!!!!!!1