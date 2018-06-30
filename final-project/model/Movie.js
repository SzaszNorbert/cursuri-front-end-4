//global api variable with api value
const apiUrl='https://ancient-caverns-16784.herokuapp.com/movies';
/* Initiating the Movie class with its constructor
The constuctor will get the data parameter which will be given in another files class method */

class Movie{
	constructor(data){
		this._id=data._id
		this.Title=data.Title;
		this.Year=data.Year;
		this.Runtime=data.Runtome;
		this.Genre=data.Genre;
		this.Language=data.Language;
		this.Country=data.Country;
		this.Poster=data.Poster;
		this.imdbRating=data.imdbRating;
		this.imdbVotes=data.imdbVotes;
		this.imdbID=data.imdbID;
		this.Type=data.Type;
	}

//method for movie detail

	getMovieDetail(id){
		return $.ajax(apiUrl+'/:'+id,{
			method:'GET',
			success:(e)=>{
				//console.log(e.results);
				const item=e.results;
				this._id=item._id;
				this.Title=item.Title;
				this.Year=item.Year;
				this.Runtime=item.Runtime;
				this.Genre=item.Genre;
				this.Language=item.Language;
				this.Country=item.Country;
				this.Poster=item.Poster;
				this.imdbRating=item.imdbRating;
				this.imdbVotes=item.imdbRating;
				this.imdbID=item.imdbID;
				this.Type=item.Type;
			},
			error:function(xhr){
				console.log('Something went wrong with post details!'+xhr);
			}
		});
	}

//method for post a new movie

	addNewMovie(data){
		return $.ajax(apiUrl,{
			method:'POST',
			data:data,
			success:(e)=>{
				//window.location.reload(true);
			},
			error:(xhr)=>{
				console.log("An error has occured:",xhr);
			}
		});
	}

//method for deleting a movie from the list

	deleteMovie(id){
		return $.ajax(apiUrl+'/:'+id,{
			method:'DELETE',
			success:()=>{
				//window.location.reload(true);
			},
			error:(xhr)=>{
				console.log("Error:",xhr);
			}
		});
	}

//method for editing a movie from the list

	editMovie(id,data){
		return $.ajax(apiUrl+'/:'+id,{
			method:'PUT',
			data:data,
			success:()=>{
				//window.location.reload(true);
			},
			error:(xhr)=>{
				console.log("Error:",xhr);
			}
		});
	}
}