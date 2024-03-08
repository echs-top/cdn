function lines(){
var linescon=document.querySelectorAll("pre code");
if(linescon){
linescon.forEach((value, index) => {if(linescon[index].querySelectorAll("ul li").length<=0){
var c=linescon[index].innerHTML;
linescon[index].innerHTML="<ul><li>" + c.replace(/\n/g,"\n</li><li>") +"\n</li></ul>";}
});
}
  }