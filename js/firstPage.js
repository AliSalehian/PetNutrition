$(document).ready(preLoadPage());

function preLoadPage(){
    setTimeout(function(){ $("#overlay").fadeOut(4000); }, 100);
    setTimeout(function(){ $(".content").fadeIn(6000); }, 100);
}