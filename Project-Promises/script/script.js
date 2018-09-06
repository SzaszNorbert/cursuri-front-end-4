window.onload=loaded;
var apiUrl="https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic";//api i use for get method
var urlAlt="https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka";//api i use for put and delete
function loaded(){
  getPosts();
  setPosts();
  delPosts();
}
// getting elements and then post them
function getPosts(){
  
  $.ajax(apiUrl)
    .then(success)//promise to the apiUrl if it succeeds
    .then(postApiElements)//promose to the success funcion
    .catch(failure);//error handling if something went wrong
}


function success(response) {
  console.log(response.drinks);
  var posts=response.drinks;
  return posts;
}

function failure(xhr){
  console.log("error",xhr);
}

function postApiElements(posts){
  var section=document.getElementById("list-of-posts");
  for(var i=0;i<posts.length;i++){
    var post=posts[i];
    console.log(post.strDrink);
    var elem=document.createElement("article");
    elem.classList.add("customize");
    elem.innerHTML='<h2>'+post.strDrink+'</h2>';
    section.appendChild(elem);
  }
}













