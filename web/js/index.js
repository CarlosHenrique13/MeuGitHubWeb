
function ImagensPuclic(){
    var div1 = document.getElementById("secaopublic-01");
    var div2 = document.getElementById("secaopublic-02");
    if (div1.style.display === "none") {
        if(div2.style.display === "block"){
            div2.style.display = "none";   
            div1.style.display = "block"
        }
    } else {
        div1.style.display = "none";
        div2.style.display = "block"        
    }
}
var tem = setInterval(ImagensPuclic,2000)

























































function mostraDiv(id,div2)
{
var divstyle = new String();
divstyle = document.getElementById(id).style.display;

var divAux = new String();
divAux = document.getElementById(div2).style.display;

      if (divAux=="block" || divAux == ""){
       document.getElementById(div2).style.display = "none";
    }   

    document.getElementById(id).style.display = "block";
    return false;
}




