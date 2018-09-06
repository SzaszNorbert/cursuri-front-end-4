//declare global variable for url
var gameUrl='https://games-world.herokuapp.com/games';
//declaration for class function to create array of objects
function GameList(){
	this.itemList=[];
}

//here comes the prototype method function in which we list  the api's data

GameList.prototype.fetchData=function(){
	var that=this;
	return $.ajax(gameUrl,{
		method:'GET',
		success:function(response){
			console.log('All the games:',response);
			for(var i=0;i<response.length;i++){
				var postItem=response[i];
				var gameModel=new Game();

				//set all the data that we received from server on post model
				gameModel._id=postItem._id;
				gameModel.title=postItem.title;
				gameModel.imageUrl=postItem.imageUrl;
				gameModel.description=postItem.description;

				//push the model in items array
				that.itemList.push(gameModel);
			}
				console.log(that.itemList);
			},
		error:function(xhr){
			console.log('There was a major error',xhr);
		}
	});
}

