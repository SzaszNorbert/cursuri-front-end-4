window.onload=onLoaded;
let weatherApi="https://api.wunderground.com/api/cfbfc5f603141e07/conditions/q/RO/Cluj_Napoca.json";
function onLoaded(){
     getcookie();
  
    $.ajax(weatherApi,{
      method:'GET'
    })
    .then(dataResponse)
    .then(displayWeather)
    .catch(displayError);
    
}







//response function
function dataResponse(response){
  console.log(response.current_observation);
  //declaring a new variable and giving it the sub object of the response
  let weatherResponse=response.current_observation;
  //return it to use in next function
  return weatherResponse;
}

//error handling part
function displayError(xhr){
  console.log(xhr);
}

//display preference function
function displayWeather(response){

  const disp=document.querySelectorAll("input[name='user-preference']");
  let parDisp=document.getElementById("display-weather");
  //loop for array of radio buttons from querySelectorAll
  for(let i=0;i<disp.length;i++){
        //giving event handlers to every element regarding their value
        disp[i].addEventListener("change",()=>{
          if(disp[i].value=="fahrenheit"){
              //getting data from previous function from promise chain and displaying it
                parDisp.innerHTML=response.feelslike_f+"fahrenheit";
                //put value in cookie when value coresponds
                document.cookie="name="+disp[i].value;
             }
          else if(disp[i].value=="celsius"){
                parDisp.innerHTML=response.feelslike_c+"celsius";
                document.cookie="name="+disp[i].value;  
             }
        });
      }

}

function getcookie(){
  const disp=document.querySelectorAll("input[name='user-preference']");
      let parDisp=document.getElementById("display-weather");
  const cookieItem={};
  const cookiesString = document.cookie;
  const separatedEntries=cookiesString.split(";");
  separatedEntries.forEach((entry)=>{
    const trimmedEntry=entry.trim();
    const splitEntry=trimmedEntry.split("=");
    cookieItem[splitEntry[0]]=splitEntry[1];
  });
  console.log(cookieItem);
  const userPref=cookieItem.name;
    if(userPref){
    document.querySelector(`[value=${userPref}]`).setAttribute('checked',true);
      $.ajax(weatherApi,{
      method:'GET'
    })
    .then((response)=>{
          if(userPref=="fahrenheit"){ 
                parDisp.innerHTML=response.current_observation.feelslike_f+"fahrenheit";
             }
          else if(userPref=="celsius"){
                parDisp.innerHTML=response.current_observation.feelslike_c+"celsius";
             }
        });
      }
}

  
