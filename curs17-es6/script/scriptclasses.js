//not hoisted
/*class Post{
	constructor(){
		this.id=null;
		this.title="";
		this.body="";
		this.userId=null;
	}
	//class/prototype methods
	fetchData(id){
			//var that=this;
			return $.ajax('https://jsonplaceholder.typicode.com/posts/' + id,{
			method:'GET',
			success:(data) => {
				this.id=data.id;
				this.title=data.title;
				this.body=data.body;
				this.userId=data.userId;
			},
			error:()=>{
				alert('Something went wrong with post details!');
			}
		});
		
	}
	//ez egy return funkcio
	get getTitle(){
		return this.title.toUpperCase();
	}
//setter
	set bodySetter(bodyText){
		if(bodyText){
		this.body=bodyText;
		}
		else {
			this.body="Lorem ipsum...";
		}
	}

	static formatText(textToFormat){
		return textToFormat + "...";
	}

}

const currentPost=new Post();
currentPost.title="Some String";
//currentPost.bodySetter="sdgsdgl";
currentPost.fetchData(4).then((response)=>{
	console.log(response);
});
//calll getters
console.log(currentPost.getTitle);
console.log(currentPost.title);
//call setters
currentPost.bodySetter="Summer body";
console.log("Setter with text:",currentPost.body);

currentPost.bodySetter="";
console.log("Setter with text:",currentPost.body);

//call static method
const formattedText=Post.formatText(currentPost.body);
currentPost.body=formattedText;
console.log(currentPost.body);

//class inheritance
*/
/*class Animal{
	constructor(){
		this.name="";
		this.age=0;
		this.height=0;
	}
	speak(){
		alert("Speaking like an aninal");
	}
	eat(){
		console.log("Nom Nom!");
	}
}


class Dog extends Animal {
	constructor(){
		//class specific attribute
		super();
		this.breed="";
	}
	playFetch(){
		console.log("I'm happy to play fetch!");
	}
	speak(){
		console.log("Miau!");
	}
}

const a=new Animal();
console.log(a);
const b=new Dog();
console.log(b);
b.eat();
b.name="Rex";
console.log(b.name);
//this is from dog class own property
b.breed;
//subclass specific for extended class dog
b.playFetch();
b.speak();*/

class App{
	constructor(){
		this.id=0;
		this.name="";
		this.price=0.0;

	}
	start(){
		console.log("I wanna play a game!!!");
	}
	stop(){
		console.log("You lost!!!");
	}
}

class Game extends App{
	constructor(){
		super();
		this.score=0;
		this.winners=[];
	}
	play(){
		console.log("You are currently playing!!!");
	}
}

const me=new App();
const you=new Game();
you.id=1;
you.name="Rizaen";
you.price=19.99;
you.score=9999;
console.log(me);
console.log(you);
you.start();
you.play();
you.stop();