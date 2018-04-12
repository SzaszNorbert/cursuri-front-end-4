window.addEventListener("load", onHtmlLoaded);
function onHtmlLoaded(){

        var div=document.getElementById("container");
    
        var elem = document.getElementById("head");
        console.log(elem);
        elem.getAttribute("head");
        console.log("this is the get attribute part",elem);
        elem.innerHTML="It's not some random text";
  
        var par=document.getElementById("par");
        console.log(par);
  
        var cont=document.querySelector(".content");
        console.log(cont);
        cont.innerHTML="Lorem";
  
        elem.style.border="1px solid green";
  
        elem.setAttribute("id","heading-1");
  
        elem.innerHTML="This is the new header";
        elem.getAttribute("head");
        console.log("this is the get attribute part",elem);
  
        var classes=document.querySelector(".content").classList;
        classes.add("plus");
  
        var paragraph=document.createElement("p");
        paragraph.innerHTML="I was created for the new paragraph!";
        div.appendChild(paragraph);
  
        paragraph.style.border="2px dotted blue";
        paragraph.style.padding="10px";
        paragraph.style.margin="15px";
  
        var heading=document.createElement("h2");
        heading.innerHTML="I am a second header";
        div.appendChild(heading);
        
        
  
}