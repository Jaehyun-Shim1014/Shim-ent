(function(){
var b=document.querySelector(".ddb"),m=document.getElementById("ddm");if(!b||!m)return;
function set(o){m.hidden=!o;b.setAttribute("aria-expanded",o?"true":"false")}
b.addEventListener("click",function(e){e.stopPropagation();set(m.hidden)});
m.addEventListener("click",function(e){if(e.target.closest("a"))set(false)});
document.addEventListener("click",function(e){if(!m.hidden&&!e.target.closest(".dd"))set(false)});
document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!m.hidden){set(false);b.focus()}});
})();
