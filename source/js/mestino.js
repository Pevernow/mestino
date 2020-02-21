var funcimg=function(){
     $(this).attr("data-fancybox", "gallery");
     $(this).attr("data-src",$(this).attr("src"));
     $(this).attr("uk-img",$(this).attr("src"));
     var element = document.createElement("a");
     $(element).attr("href", $(this).attr("data-src"));
     $(element).attr("data-fancybox", "gallery");
     $(this).wrap(element);
 };
window.onload=function(){$("img").each(funcimg())};