window.onload=onHtmlLoaded;
var apiUrl="https://jsonplaceholder.typicode.com/posts";
function onHtmlLoaded(){
  
  getPosts();
  
}

function getPosts(){
  fetch(apiUrl,{
    method:'GET'
  }).then(function(response){
    console.log("response",response);
    return response.json();
  }).then(callOnSuccess);
}

function callOnSuccess(response){
    console.log("success=",response);
    var posts=response.slice(0,10);
    //console.log(posts);
    return posts;
  }

function callOnError(xhr){
    console.log("error=",xhr);
    var elPosts=document.getElementById("list-posts");
    elPosts.innerHTML="Cannot get posts!Error!!!!!!!";
  }

function callOnCommentSuccess(response){
  console.log("comments",response);
}
