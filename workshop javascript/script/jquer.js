$(window).on("load",loaded);

function loaded(){
  
  var nameElement=$("input[name='name']");
  
  var lastName=$("input[name='lname']");
  
  var gender=$("input[name='gender']")
  
  var contentElement=$("[name='content']");
  
  var form=$("form");
  form.on("submit",function(event){
    event.preventDefault();
    
     if(nameElement.val()==="") {
           nameElement.css("border","1px solid red");
      }
    else if(lastName.val()==="") {
      lastName.css("border","1px solid red");
    }
    else if((nameElement.val()==="") && (lastName.val()==="")) {
      alert("name and last name must be completed");
    }
    else if (contentElement.val()==="") {
      alert("drop a comment will you!!!");
    }
    else {
      nameElement.css("border","none");
      lastName.css("border","none");
      addComment(nameElement.val(),lastName.val(),gender.val(),contentElement.val());
    }
    
  });
}

function addComment(name,lname,gender,content){
  console.log(name,lname,gender,content);
  


  var section=$("<section></section>");
  section.addClass("comment-item");
  section.appendTo("#comments-list");
  
  var firstName=$("<h2></h2>");
  firstName.html(name);
  firstName.appendTo(section);
  
  var lastName=$("<h2></h2>");
  lastName.html(lname);
  lastName.appendTo(section);
  
  var gend=$("<p></p>");
  gend.html(gender);
  gend.appendTo(section);
  
  var cont=$("<p></p>");
  cont.html(content);
  cont.appendTo(section);
  
  var button=$("<button></button>");
  button.attr("name","remove");
  button.html("remove");
  button.appendTo(section);
  
  button.on("click",function(event){
    event.preventDefault();
    $(section).remove();
  });
  
  
}