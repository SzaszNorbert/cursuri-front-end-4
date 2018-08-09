class GameList {
	contructor(){
		this.itemList=[];
	}

	fetchGames(){
		return $.ajax('https://games-world.herokuapp.com/games',{
			method:"GET",
			success:(e)=>{
				this.itemList=[];
				console.log(e);
				for(var i=0;i<e.length;i++){
				var postItem=e[i];
				var gameModel=new Games();

				gameModel._id=postItem._id;
				gameModel.title=postItem.title;
				gameModel.imageUrl=postItem.imageUrl;
				gameModel.description=postItem.description;

				this.itemList.push(gameModel);
			}
				console.log(this.itemList);
			},
			error:(xhr)=>{
				console.log(xhr);
			}
		});
	}
}