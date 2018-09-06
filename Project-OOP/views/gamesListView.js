window.onload=function(){

		//getting data from form input
		var title=document.querySelector("input[name='title']");

		var genre=document.querySelector("input[name='genre']");

		var publisher=document.querySelector("input[name='publisher']");

		var image=document.querySelector("input[name='image']");

		var description=document.querySelector("[name='description']");

		var form=document.querySelector("form");
		form.addEventListener("submit",function(event){
			event.preventDefault();

			createNewPost(title.value,genre.value,publisher.value,image.value,description.value);
		})

		//listing api items via promise chaining
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
				postEl.setAttribute('href','../pages/gameDetails.html?gamePostId='+items._id);//?kulcs+valami igy id rendelhetunk a linkjeinkhez
				postEl.setAttribute('target','blank');
				postEl.innerHTML=items.title+'<br>';
				var remButton=document.createElement('button');
				remButton.setAttribute('data-id',items._id);
				remButton.setAttribute('name','remove');
				remButton.setAttribute('value','Remove');
				remButton.classList.add('remove');
				remButton.classList.add('pull-left');
				remButton.innerText="Remove";
				containEl.appendChild(picture);
				containEl.appendChild(postEl);
				containEl.appendChild(remButton);
			}
		}
//error function if something is messed up
function errorMsg(xhr){
			console.log("error",xhr)
		}




		//calling createNewPost
		function createNewPost(title,genre,publisher,image,description){
			console.log("simple value overview:",title,genre,publisher);

			var data={
				title:title,
				genre:genre,
				publisher:publisher,
				imageUrl:image,
				description:description
				};

			//console.log("data object :",data);

			var dataPost=new Game();
			//console.log("dataPost object:",dataPost);

			dataPost.postNewData(data)
			.then(function(){
				console.log("success");
			})
			.catch(function(xhr){
				alert("error"+xhr);
			});

		}	

		//making the delete function
		$('#container').delegate('.remove','click',function(){
			var id=this.getAttribute('data-id');
			var del=new Game();
			del.deleteGameData(id)
			.then(function(){
				alert('success');
			})
			.catch(function(){
				alert('Error!');
			});

		});


}