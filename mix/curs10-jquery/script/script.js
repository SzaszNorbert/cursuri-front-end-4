$(window).on("load",onHtmlLoaded);
function onHtmlLoaded(){
  console.log("window loaded");
  var list=$("#comments-list");
  console.log(list[0]);
  
  var firstP=$(".comment-item p")[0];
  
  console.log("first paragraph inside comment item",firstP);
  
  
  
  
  var h1=$("h1");//jquery element
  console.log(h1[0]);//html element
  console.log(h1.text(),h1.html());
  h1.text("Jquery dom manipulation");//if only text is needed
  console.log(h1.text());
  h1.html("<em>Jquery</em> dom manipulation");//if html elements are needed
  console.log(h1.html());
  
  
  
  console.log("atributul id",list.attr("id"));
  
  list.attr("id","Comments-list-new");
  
  
  console.log("new atributul id",list.attr("id"));
  
  
  list.css({"border":"2px dotted red",
            "color":"blue",
           "backgroundColor":"silver"});//objektum szerint kell feltuntetni
  
  
  
  
  //add new element
  
  var element="<section class='comment-item'><h2>name</h2><p>content</p></section>";
  list.append(element);
  
  $("<p>my new element</p>").insertBefore(list);
  
  
  
  
  
  //remove element
  var firstComment=$(".comment-item")[0];

  firstComment.remove();
  
  
  var button=$("#btn-submit");
  button.on("click", function(event){
    event.preventDefault();
    console.log("clicked!",event);
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
}