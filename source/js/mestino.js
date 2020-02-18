var funcimg=function(){
    // $(this).attr("data-fancybox", "gallery"); 直接给img添加data-fancybox会导致点击图片后图片消失
     $(this).attr("data-src",$(this).attr("src"));
     $(this).attr("uk-img",$(this).attr("src"));
     var element = document.createElement("a");
     $(element).attr("href", $(this).attr("data-src"));
     $(element).attr("data-fancybox", "gallery");
     $(element).attr("data-type","image");
     $(this).wrap(element);
 };
window.onload=function(){$("img").each(funcimg())};
<script language="javascript">
var noimg=document.getElementsByTagName("img");
for(i=0; i < noimg.length; i++){
    if($(noimg[i]).hasClass("wallpaper")){
　　    noimg[i].onerror=function(){
            this.src="https://s0.xinger.ink/acgimg/acgurl.php";
            funcimg();
        }
    }
}
</script>