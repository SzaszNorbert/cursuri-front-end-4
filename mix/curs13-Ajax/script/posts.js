window.onload=onHtmlLoaded;
function onHtmlLoaded(){
  
  getPosts();
  bindEvents();
}

function bindEvents(){
  var submitBtn=document.getElementById("post-submit");
  submitBtn.addEventListener("click",function(e){
    e.preventDefault();
    var id=document.getElementById("id-post");
    var title=document.getElementById("title");
    var body=document.getElementById("body");
    var data={
      title:title.value,
      body:body.value
    };
    updatePost(data,id.value);
  });
}

function getPosts(){
        $.ajax('https://jsonplaceholder.typicode.com/posts',{
      method:'GET',
      success:function(response){
        console.log('Get post=', response);
        var elPosts=document.getElementById("list-post");

        for(var i=0;i<response.length;i++){
          var item=response[i];
          var elem=document.createElement('article');
          elem.innerHTML=
            '<h2>'+item.title+'</h2>'+
            '<p>'+item.body+'</p>'+
            '<button data-edit-id="'+item.id+'">Edit</button>'+
            '<button data-delete-id="'+item.id+'">Delete</button>';
          elPosts.appendChild(elem);

         var deleteButton=document.querySelector('[data-delete-id="' + item.id + '"]');
         deleteButton.addEventListener("click",function(){
           var id=this.getAttribute('data-delete-id');
           console.log(id);
           deletePost(id);});

          var editButton=document.querySelector('[data-edit-id="' + item.id + '"]');
         editButton.addEventListener("click",function(){
           var id=this.getAttribute('data-edit-id');
           console.log(id);
           getPost(id);});

      }
      }
        });
}
  
  
function deletePost(id){
        $.ajax('https://jsonplaceholder.typicode.com/posts/'+id,{
         method:'DELETE',
        success:function(response){
        console.log('Delete post=', response);
        }
        });
}


function getPost(id){
          $.ajax('https://jsonplaceholder.typicode.com/posts/'+id,{
          method:'GET',
          success:function(response){
          console.log('Get post=', response);
          console.log('title=', response.title);
          console.log('body=',response.body);
          var title=document.getElementById("title");
          var body=document.getElementById("body");
          var id=document.getElementById("id-post");
          id.value=response.id;
          title.value=response.title;
          body.value=response.body;
          }
          });
}



function updatePost(data,id){
          $.ajax('https://jsonplaceholder.typicode.com/posts/'+id,{
          method:'PUT',
          data :data,
          success:function(response){
          console.log('Update post=', response);
          }
          });
}





























































