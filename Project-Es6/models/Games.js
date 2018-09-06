class Games {
	constructor(){
		this._id=null;
		this.title="";
		this.imageUrl="";
		this.description="";
	}

}

class Game extends Games {
	constructor(){
		super();
		this.genre="";
		this.publisher="";
		this.releaseDate=null;
	}

	//get element detail

	fetchDetail(id){
		return $.ajax('https://games-world.herokuapp.com/games/'+id,{
			method:'GET',
			success:(res)=>{
			console.log(res);
			this._id=res._id;
			this.title=res.title;
			this.imageUrl=res.imageUrl;
			this.description=res.description;
			this.genre=res.genre;
			this.publisher=res.publisher;
			this.releaseDate=res.releaseDate;
			},
			error:(xhr)=>{
			console.log('Something went wrong with post details!',xhr);
			}
		});
	}

	//post new game

	postNewGame(data){
		return $.ajax('https://games-world.herokuapp.com/games/',{
			method:'POST',
			data:data,
			success:(res)=>{
				window.location.reload(true);
			},
			error:(xhr)=>{
				console.log(xhr);
			}
		});
	}

	//delete game

	deleteGame(id){
		return $.ajax('https://games-world.herokuapp.com/games/'+id,{
			method:'DELETE',
			success:(res)=>{
				window.location.reload(true);
			},
			error:(xhr)=>{
				console.log(xhr);
			}
		});
	}

	//update an existing game

	updateGame(id,data){
		return $.ajax('https://games-world.herokuapp.com/games/'+id,{
			method:'PUT',
			data:data,
			success:()=>{
				window.location.reload(true);
			},
			error:(xhr)=>{
				alert('Error');
			}
		});
	}
} 