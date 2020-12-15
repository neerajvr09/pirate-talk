// getting textarea reference
var txtInput = document.querySelector(".inputText");
//getting button reference
var translateBtn = document.querySelector(".translate-btn");
// getting outputdiv reference
var txtOutput = document.querySelector(".outputText");

//server url
var serverUrl ="https://api.funtranslations.com/translate/minion.json"

function getTranslationUrl(text){
    return serverUrl + "?" +"text=" + text
}
function errorHandler(error){
    alert("something wrong with server, try again after sometimes")
}
function clickHandler(){
    var inputTxt = txtInput.value // taking input

    //proccessing
    fetch(getTranslationUrl(inputTxt))
    .then(response => response.json())
    .then(json => txtOutput.innerText = json.contents.translated)
    .catch(errorHandler)
}


// // adding event listner to button
var translateBtnListner = translateBtn.addEventListener("click", clickHandler);










