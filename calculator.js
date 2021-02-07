function operacion(){
    
    let valor = (document.getElementById("numero")).value;
    let sol = document.getElementById("solucion");
    console.log(valor);

    sol.innerHTML = valor;
}