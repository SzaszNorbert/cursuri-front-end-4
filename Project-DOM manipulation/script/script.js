window.addEventListener("load",onLoaded);

function onLoaded(){
  
  var firstName=document.querySelector("input[name='first-name']");
  
  
  var lastName=document.querySelector("input[name='last-name']");
  
  var gender=document.querySelector("input[name='gender']");
  
  var content=document.querySelector("[name='content']");
  
  var greet=document.getElementById("greet");
  
  var form=document.querySelector("form");
  form.addEventListener("submit",function(event) {
    event.preventDefault();
    
    if(firstName.value==="") {
      firstName.classList.add("border-red-style");
    }
    else if (lastName.value==="") {
      lastName.classList.add("border-red-style");
    }
    else if(gender.value==="") {
      alert("Choose a gender!!!");
    }
    else if(content.value==="") {
      content.classList.add("border-red-style");
    }
    else {
      firstName.classList.remove("border-red-style");
      lastName.classList.remove("border-red-style");
      content.classList.remove("border-red-style");
      submitForm(firstName.value,lastName.value,gender.value,content.value,greet);
    }
    
  });
}


function submitForm(fname,lname,gender,content,greet){
  console.log("User entered his first name:",fname);
  console.log("User entered his last name:",lname);
  console.log("User entered his gender:",gender);
  console.log("User has left a comment:",content);
  
  
  greet.style.backgroundColor="green";
  greet.style.color="white";
  greet.fontSize="35px";
  greet.style.padding="10px";
  greet.style.borderRadius="20px";
  greet.style.textAlign="center";
  greet.innerHTML="Thank you for contacting us "+fname;
  
  
}