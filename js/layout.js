const bSomara = document.querySelector("#btnSomar");

bSomar.addEventListener("click", ()=>{
    var n1 = parseFloat(document.querySelector("#estilo").value);
    var n2 = parseFloat(document.querySelector("#estilo2").value);
    juntar(n1,n2);
});

function juntar(p1,p2){
    var juntar = p1,p2;
    document.querySelector("#resultado").value = juntar;

}