window.addEventListener("load",onHtmlLoaded);

function onHtmlLoaded(){
  
  createPosts();//call to button function
  reseting();
}

//creating reset button
function reseting(){
  var btn=$("#reset");
  btn.on("click",function(){
    $("article").remove();
  })
}


//creating posts via button 

function createPosts(){
  var btn=document.getElementById("create-posts");
  var userInput=document.getElementById("user-input");
  btn.addEventListener("click",function(){
    getApiPost(userInput.value);//the call to getApiPost is happening here at the moment the button is clicked
  })
}

//kistin posts from api

function getApiPost(input){
  
  $.ajax("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic",{
      method:'GET',
      success:function(response){
          console.log("The apis are:",response.drinks[2]);
          var posts=document.getElementById("list-posts");
             
          for(var i=0;i<input;i++){
              var item=response.drinks[i];
              var elem=document.createElement('article');
              elem.classList.add("customize");
              elem.innerHTML='<h2>'+item.strDrink+'</h2>';
              posts.appendChild(elem);
          }//for ends here
        
      }//response function ends here
    
  });//$.ajax ends here
  
}  //getApiPost ends here


/*
notes for future me!!!!
the api link that i use:https://www.thecocktaildb.com/api.php
the public api is from foods and drinks table

*/