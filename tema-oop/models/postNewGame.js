window.addEventListener("load",onLoaded);
var gameUrlPost='https://games-world.herokuapp.com/games';
function onLoaded(){
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
}

function createNewPost(title,genre,publisher,image,description){
	console.log(title,genre,publisher);
	var dataPost={
		title:title,
		genre:genre,
		publisher:publisher,
		imageUrl:image,
		description:description
	};

	console.log(dataPost);

	$.ajax(gameUrlPost,{
		type:'POST',
		data:dataPost,
		success:function(){
			alert("Success!");
		},
		error:function(xhr){
			alert("Error:"+xhr);
		}
	});
}