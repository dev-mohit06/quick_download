window.addEventListener("load",function(){
    let loaderElement = document.getElementsByClassName("loader")[0];
    loaderElement.style.opacity = "0";

    setTimeout(() => {
        elemRemover(loaderElement);
    }, 1500);
});

function elemRemover(element){
    element.remove();
}