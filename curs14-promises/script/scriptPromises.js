window.onload=onHtmlLoaded;
var apiUrl="https://jsonplaceholder.typicode.com/posts";
function onHtmlLoaded(){
  
  getPosts();
  
}

function getPosts(){
  $.ajax(apiUrl)
   .then(callOnSuccess,callOnError)
  .then(function(posts){
    console.log(posts);
    for(var i=0;i<posts.length;i++){
      var post=posts[i];
       $.ajax(apiUrl+'/'+post.id+'/comments').then(callOnCommentSuccess);
    }
  });
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