//this is the class function with the object properties
//this will be bound in the first line of GameHome.html head
function Game(data){
	this._id=null;
	this.title="";
	this.genre="";
	this.publisher="";
	this.imageUrl="";
	this.description="";
}
//this comes in the models folder because it will have requests
Game.prototype.fetchData=function(id){
	var that=this;
	return $.ajax('https://games-world.herokuapp.com/games/'+id,{
		method:'GET',
		success:function(response){
			console.log(response);
			that._id=response._id;
			that.title=response.title;
			that.imageUrl=response.imageUrl;
			that.description=response.description;
		},
		error:function(xhr){
			alert('Something went wrong with post details!'+xhr);
		}
	});
}

//here comes the posting function
Game.prototype.postNewData=function(data){
	var that=this;
	return $.ajax('https://games-world.herokuapp.com/games/',{
		method:'POST',
		data:data,
		success:function(response){
			window.location.reload(true);
		},
		error:function(xhr){
			console.log("An error has occured:",xhr);
		}
	});
}

//here comes the delete method for Game() class constructor


Game.prototype.deleteGameData=function(id){
	var that=this;
	return $.ajax('https://games-world.herokuapp.com/games/'+id,{
		method:'DELETE',
		success:function(){
			window.location.reload(true);
		},
		error:function(xhr){
			console.log("Error:",xhr);
		}
	})
}

//here comes the update function for Gmae class with ajax put method

Game.prototype.updateGameData=function(id,data){
	var that=this;
	return $.ajax('https://games-world.herokuapp.com/games/'+id,{
		method:'PUT',
		data:data,
		success:function(){
			window.location.reload(true);
		},
		error:function(xhr){
			console.log("Error:",xhr);
		}
	})
}