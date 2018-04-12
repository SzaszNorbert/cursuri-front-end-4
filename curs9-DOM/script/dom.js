window.addEventListener("load", onHtmlLoaded);
function onHtmlLoaded(){
  var commentsList=document.getElementById("comments-list");
  console.log(commentsList);
  
  console.log("comment items",document.getElementsByClassName("comment-item"));
  console.log("comment items by tag",document.getElementsByTagName("section"));
  var commentItems=document.getElementsByTagName("section");
  console.log("first comment item",commentItems[0]);
  console.log("second comment item",commentItems[1]);
  console.log("first sparagraph inside section",document.querySelector("section.comment-item > p"));
  console.log("first sparagraph inside section",document.querySelectorAll("section.comment-item > p"));
  
  
  var h1Array=document.getElementsByTagName("h1");
  console.log(h1Array[0]);
  
  var h1=document.querySelector("h1");
  console.log(h1);
  
  console.log(h1Array.innerHTML);
  console.log(h1Array[0].innerHTML);
  console.log(h1.innerHTML);
  h1.innerHTML="JS DOM Manipulation Modifie";
  
  //get and setttt
  var list=document.getElementById("comments-list");
  console.log("Element id",list.id,list.getAttribute("id"));
  list.id=("comments-list-new-id");
  list.setAttribute("id","comments-list-new");
  
  
  list.style.border="solid 1px red";
  list.style.padding="5px";
  
  
  //create element
  
  var comment=document.createElement("section");//create new section
  comment.className="comment-item";//set the class on this element
  var commentClassList=comment.classList;
  commentClassList.add("second-comment-item");
  comment.innerHTML="<h2>Norbi</h2><p>Comment from Norbi</p>";
  
  list.appendChild(comment);
  
  
  var anaComment=document.querySelector(".comment-item");
  list.removeChild(anaComment);
  
  
  console.log(h1Array);
  
  console.log(comment.children);
  
  console.log(comment.querySelector("p"));
  
  //events
  
  var submitButton=document.getElementById("btn-submit");
  submitButton.addEventListener("click", handleClick);
  
}

function handleClick(event){
    event.preventDefault();//stops the default execution and does an executing of next lines
    console.log(event.target);//the element that was clicked
  }


