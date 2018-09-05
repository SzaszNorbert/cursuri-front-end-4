window.onload=function(){
		var posts = new PostList();

		posts.fetchData()
		.then(createPosts)
		.catch(errorMsg);



		//this is the view part
		//outer functions for the promise chaining

		function createPosts(){
			//console.log(posts.items.length);
			var containEl=document.getElementById("container");
			for(var i=0;i<posts.items.length;i++){
				var items=posts.items[i];//simplifying your variable
				var postEl=document.createElement('a');
				postEl.setAttribute('href','file:///C:/cursuri-front-end-4/curs16-workshop/pages/postDetails.html?postId=' + items.id);//?kulcs+valami igy id rendelhetunk a linkjeinkhez
				postEl.setAttribute('target','blank');
				postEl.innerHTML=i+' '+items.title+'<br>';
				containEl.appendChild(postEl);
			}
		}

		function errorMsg(xhr){
			console.log("error",xhr)
		}

}