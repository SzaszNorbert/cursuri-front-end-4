class Games {
	constructor(){
		this._id=null;
		this.title="";
		this.imageUrl="";
		this.description="";
	}

	fetchDetail(id){
		return $.ajax('https://games-world.herokuapp.com/games/'+id,{
			method:'GET',
			success:function(res){
			console.log(res);
			this._id=res._id;
			this.title=res.title;
			this.imageUrl=res.imageUrl;
			this.description=res.description;
			},
			error:function(xhr){
			console.log('Something went wrong with post details!',xhr);
			}
		});
	}
}