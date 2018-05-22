//this is the class function with the object properties
//this will be bound in the first line of GameHome.html head
function Game(data){
	this._id=null;
	this.title="";
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
			console.log(response);
		},
		error:function(xhr){
			console.log("An error has occured:",xhr);
		}
	});
}
