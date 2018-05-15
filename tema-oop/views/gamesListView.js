window.onload=function(){
		var posts = new GameList();

		posts.fetchData()
		.then(createPosts)
		.catch(errorMsg);



		//this is the view part
		//outer functions for the promise chaining

		function createPosts(){
			console.log(posts.itemList.length);
			var containEl=document.getElementById("container");
			for(var i=0;i<posts.itemList.length;i++){
				var items=posts.itemList[i];//simplifying your variable
				var postEl=document.createElement('a');
				postEl.setAttribute('href','file:///C:/cursuri-front-end-4/tema-oop/pages/gameDetails.html?gamePostId='+items._id);//?kulcs+valami igy id rendelhetunk a linkjeinkhez
				postEl.setAttribute('target','blank');
				postEl.innerHTML=items.title+'<br>';
				containEl.appendChild(postEl);
			}
		}

		function errorMsg(xhr){
			console.log("error",xhr)
		}

}