//prevent right click
document.addEventListener("contextmenu", function(evt){
    evt.preventDefault();
    }, false);

//prevent text copying
document.addEventListener("copy", function(evt){
    evt.clipboardData.setData("text/plain", "Copying is not allowed on this webpage");
    evt.preventDefault();
    }, false);