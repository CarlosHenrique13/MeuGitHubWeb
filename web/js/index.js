function ImagensPuclic(){
    var div1 = document.getElementById("secaopublic-01");
    var div2 = document.getElementById("secaopublic-02");
    if (div1.style.display === "none") {
        if(div2.style.display === "block"){
            div2.style.display = "none";   
            div1.style.display = "block";
        }
    } else {
        div1.style.display = "none";
        div2.style.display = "block"        
    }
}

function ImagensSyshen(){
    var div1 = document.getElementById("secaosyehen-01");
    var div2 = document.getElementById("secaosyehen-02");
    if (div1.style.display === "none") {
        if(div2.style.display === "block"){
            div2.style.display = "none";   
            div1.style.display = "block";
        }
    } else {
        div1.style.display = "none";
        div2.style.display = "block"        
    }
}

var temp = setInterval(ImagensPuclic,2000)
var tes  = setInterval(ImagensSyshen,2000)



