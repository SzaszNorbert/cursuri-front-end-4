window.onload=onHtmlLoaded;
function onHtmlLoaded(){
  var postTitle=document.getElementById("post-title");
  var postBody=document.getElementById("post-body");
  
  
  postData(postTitle.value,postBody.value);
  getPosts();
  
  
}


function getPosts(){
  $.ajax('https://jsonplaceholder.typicode.com/posts',{
method:'GET',
success:function(response){
  console.log('Get post=', response);
  var html='';
  for(var i=0;i<response.length;i++){
    var item=response[i];
    html += '<article>'+
      '<h2>'+item.title+'</h2>'+
      '<p>'+item.body+'</p>'+
      'Title<input type="text">'+
      'Body<input type="text">'+
      '<button data-id="'+item.id+'">Edit</button>'+
      '<button>Delete</button>'+
    '</article>';
  }
  var elPosts=document.getElementById("list-post");//element de dom azert$
  elPosts.innerHTML=html;
}
});
}


function postData(title,body) {
  
  $.ajax('https://jsonplaceholder.typicode.com/posts',{
    method:'POST',
    data:{
      userId:1,
      title:title,
      body:body
    },
    success:function(response){
      console.log("Post =",response)
    var html='';
    html += '<article>'+
      '<h2>'+response.title+'</h2>'+
      '<p>'+response.body+'</p>'+
      '<button data-id="'+response.id+'">Edit</button>'+
      '<button>Delete</button>'+
    '</article>';
  var elPosts=document.getElementById("list-post");//element de dom azert$
  elPosts.innerHTML+=html;
  },
    error:function(xhr){
  alert('Create post with error');
}
  });
    
}






