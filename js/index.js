
// Funções de Imagens
function Img_zom(id){
    var img = document.getElementById(id);
    var win = window.innerWidth;
  
    img.style.border = "none";
    if (img.style.width === "100%"){
        if (win < 790){
            img.style.width = "40%";
            img.style.background = "transparent";    
        }else if (win > 700){
            img.style.width = "25%";
            img.style.background = "transparent";
        }
        
    }else{
        img.style.width = "100%";
    }    
}


