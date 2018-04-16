$(window).on("load",pageLoaded);

function pageLoaded(){
  
  var firstName=$("input[name='first-name']");
  var lastName=$("input[name='last-name']");
  var gender=$("input[name='gender']");
  var content=$("[name='content']");
  
  var greet=$("#greet");
  
  var form=$("form");
  form.on("submit",function(event){
    
    event.preventDefault();
    
    if(firstName.val()==="") {
      firstName.css("border","1px solid red");
    }
    else if(lastName.val()==="") {
      lastName.css("border","1px solid red");
    }
    else if(gender.val()==="") {
      alert("Choose a gender!!!!");
    }
    else if(content.val()==="") {
      content.css("border","1px solid red");
    }
    else {
      
      firstName.css("border","none");
      lastName.css("border","none");
      content.css("border","none");
      userData(firstName.val(),lastName.val(),gender.val(),content.val(),greet);
    }
   
  });
  
}


function userData(fname,lname,gender,content,greet) {
  console.log("User gave his first name:",fname);
  console.log("User gave his last name:",lname);
  console.log("User chose a gender:",gender);
  console.log("User added a comment:",content);
  
  
  greet.css({
    "backgroundColor":"green",
    "color":"white",
    "fontSize":"28px",
    "padding":"10px",
    "borderRadius":"10px",
    "textAlign":"center"    
  });
  
  greet.html("Thanks for contacting us "+fname);
}