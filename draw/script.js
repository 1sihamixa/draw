var calculer = document.querySelector('.bttntwo');
var section = document.querySelector('.vosdevis');
var section1 = document.querySelector('.footer');
var value1 = document.querySelector('.madex');
var value2 = document.querySelector('.madst');
var poids = document.getElementById('poids');
var  Frais = document.querySelector('.input');
var demontion1 = document.getElementById('longueur');
var demontion2 = document.getElementById('largeur');
var demontion3 = document.getElementById('hauteur');
fetch("dropdrone.json").then(Response => Response.json())
.then(data => {
    var distance = data.tarifs.standard.distance
    for(e in distance){
        Frais.innerHTML += ` <option value="${e}">${e}</option>`
    }
calculer.addEventListener('click',function(){
    if(poids.value !== '' && demontion1.value !== "" && demontion2.value !== "" && demontion3.value !== ""){
    section.style.display = "block"
    section1.style.top = "400%"
    let fraisv = 0
    let fraisv2 = 0
    switch(Frais.value){
        case "moins de 10 km":
            fraisv = 5
            fraisv2 =7
            break;
        case "entre 10km et 50km":
            fraisv = 10
            fraisv2 = 15
            break;
        case "entre 50km et 100km":
            fraisv = 15
            fraisv2 = 22
            break;
        case "entre 100km et 300km":
            fraisv = 30  
            fraisv2 = 40
            break;
        case "plus de 300km":
            fraisv = 50  
            fraisv2 = 65
            break            
    }
    console.log(fraisv,fraisv2)
    var demontion = +demontion1.value + +demontion2.value + +demontion3.value
   
    console.log(Frais.value)
    
    value1.innerHTML =`MAD ${data.tarifs.standard.base + +poids.value + data.tarifs.standard.poids + demontion + data.tarifs.standard.dimension + fraisv}`
    console.log(data.tarifs.standard.base + +poids.value + data.tarifs.standard.poids + demontion + data.tarifs.standard.dimension + fraisv)
    value2.innerHTML =`MAD ${data.tarifs.express.base + +poids.value + data.tarifs.express.poids + demontion + data.tarifs.express.dimension + fraisv}`

}else{
    alert("completer les donez")
}}
)
})