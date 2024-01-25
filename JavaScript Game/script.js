var char = document.getElementById("character");
var block = document.getElementById("block");
function jump(){
    if(char.classList != "animate"){
        char.classList.add("animate");
    }
    char.classList.add("animate");
    setTimeout(function(){
        char.classList.remove("animate");
    },500);
}
var score = 0;
var checkDead = setInterval(function(){
   var charTop = parseInt(window.getComputedStyle(char).getPropertyValue("top"));
   var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
   if(blockLeft<35 && blockLeft>0 && charTop>=130){
    block.style.animation = "none";
    block.style.display = "none";
    alert("U lose..  your score is "+score);
   }
   if(blockLeft<20 && blockLeft>0){
    score++;
   }
   
},10);