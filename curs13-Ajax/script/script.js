// get one post
$.ajax('https://jsonplaceholder.typicode.com/posts/1',{
method:'GET',
success:function(response){
  console.log('Get post=', response);
  console.log('title=', response.title);
  console.log('body=',response.body);
}
});

/*$.ajax('https://jsonplaceholder.typicode.com/posts',{
method:'GET',
success:function(response){
  console.log('Get post=', response);
  for(var i=0;i<response.length;i++){
    var item=response[i];
  console.log('title=',item.title);
  console.log('body=',item.body);
  }
}
});*/
// save new post
$.ajax('https://jsonplaceholder.typicode.com/posts/1',{
method:'PUT',
data :{
  userId: 1,
  title: "Update post1",
  body: "Update post1"
},
  success:function(response){
  console.log('Update post=', response);
}
});

$.ajax('https://jsonplaceholder.typicode.com/posts',{
method:'POST',
data :{
  userId: 1,
  title: "New Post",
  body: "New post body"
},
  success:function(response){
  console.log('Get post=', response);
}
});

$.ajax('https://jsonplaceholder.typicode.com/posts/1',{
method:'DELETE',
  success:function(response){
  console.log('Delete post=', response);
}
});

$.ajax('https://jsonplaceholder.typicode.com/posts/23/comments',{
method:'GET',
success:function(response){
  console.log('Get comment=', response);
}
});

//create error
$.ajax('https://jsonplaceholder.typicode.com/posts/1',{
method:'POST',
data :{
  userId: 1,
  title: "New Post",
  body: "New post body"
},
  success:function(response){
  console.log('Get post=', response);
},
error:function(xhr){
  alert('Create post with error');
}
});



