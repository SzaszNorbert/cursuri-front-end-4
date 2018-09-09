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
      firstName.addClass('border-red-style');
    }
    else if(lastName.val()==="") {
      lastName.addClass('border-red-style');
    }
    else if(gender.checked == false) {
      alert("Choose a gender!!!!");
    }
    else if(content.val()==="") {
      content.addClass('border-red-style');
    }
    else {
      
      firstName.removeClass('border-red-style');
      lastName.removeClass('border-red-style');
      content.removeClass('border-red-style');
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