	window.onload=function(){	
		//comments
		var currentComment=new PostComm();
		var currentPostId=getUrlParameter('postId');
		//console.log(currentPostId);

		currentComment.fetchComment(currentPostId)
		.then(createComment)
		.catch(errorMsg);

		// callbacks for promise chain
		function createComment(){
			//console.log(currentPost);
			var postDetailsContainer=document.getElementById('post-comments');
			//create title element
			var postTitleEl=document.createElement('h3');
			postTitleEl.innerHTML=currentComment.name;
			//create body element
			var postBodyEl=document.createElement('p');
			postBodyEl.innerHTML=currentComment.body;
			//create email
			var postEmailEl=document.createElement('p');
			postEmailEl.innerHTML=currentComment.email;

			postDetailsContainer.appendChild(postTitleEl);
			postDetailsContainer.appendChild(postBodyEl);
			postDetailsContainer.appendChild(postEmailEl);
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