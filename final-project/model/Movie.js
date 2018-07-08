//global api variable with api value
const dapiUrl='https://ancient-caverns-16784.herokuapp.com/movies';
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

//method for post a new movie

	addNewMovie(data){
		return $.ajax(dapiUrl,{
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
		return $.ajax(dapiUrl+'/:'+id,{
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
		return $.ajax(dapiUrl+'/:'+id,{
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