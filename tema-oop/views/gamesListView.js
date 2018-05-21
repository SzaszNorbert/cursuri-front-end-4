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
			var box=document.createElement('div');
			for(var i=0;i<posts.itemList.length;i++){
				var items=posts.itemList[i];//simplifying your variable
				var picture=document.createElement('img');
				picture.setAttribute('src',items.imageUrl);
				picture.setAttribute('alt','404');
				picture.classList.add('img-size');
				var postEl=document.createElement('a');
				postEl.setAttribute('href','file:///C:/cursuri-front-end-4/tema-oop/pages/gameDetails.html?gamePostId='+items._id);//?kulcs+valami igy id rendelhetunk a linkjeinkhez
				postEl.setAttribute('target','blank');
				postEl.innerHTML=items.title+'<br>';
				var remButton=document.createElement('button');
				remButton.setAttribute('data-id',items._id);
				remButton.setAttribute('name','remove');
				remButton.setAttribute('value','Remove');
				remButton.classList.add('pull-left');
				remButton.innerText="Remove";
				containEl.appendChild(postEl);
				containEl.appendChild(picture);
				containEl.appendChild(remButton);
			}
		}
//error function if something is messed up
function errorMsg(xhr){
			console.log("error",xhr)
		}

}