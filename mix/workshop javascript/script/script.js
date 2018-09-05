window.onload=onHtmlLoaded;
function onHtmlLoaded(){
  var nameElement=document.querySelector("input[name='name']");
  
  var lastName=document.querySelector("input[name='lname']")
  
  var gender=document.querySelector("input[name='gender']");
  
  var contentElement=document.querySelector("[name='content']");
  
    
  var form=document.querySelector("form");
  form.addEventListener("submit",function(event){
    event.preventDefault();
    addComment(nameElement.value,lastName.value,gender.value,contentElement.value);
  });
  
}

function addComment(name,lname,gender,content){
  console.log(name,lname,gender,content);
  
  var section=document.createElement("section");
  section.classList.add("comment-item");
  
  var h2=document.createElement("h2");
  h2.innerText=name;
  section.appendChild(h2);
  
  var Name=document.createElement("h2");
  Name.innerText=lname;
  section.appendChild(Name);
  
  var gen=document.createElement("p")
  gen.innerText=gender;
  section.appendChild(gen);
  
  var p=document.createElement("p");
  p.innerText=content;
  section.appendChild(p);
  
  //<button name="remove">x</button>
  
  var button=document.createElement("button");
  button.setAttribute("name","remove");
  button.innerText="remove";
  section.appendChild(button);
  
  //add eventlistener on button
  
  button.addEventListener("click",function(event){
    event.preventDefault();
    console.log(event.target);
    
    
    var killedParent=event.target.parentElement;
    list.removeChild(killedParent);
  });
  
  var list=document.getElementById("comments-list");
  list.appendChild(section);
  
  
}