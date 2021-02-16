function operacion(){
    
    let valor = (document.getElementById("numero")).value;
    
    console.log(valor);
    console.log(eval(valor));

    solucion.innerHTML = eval(valor);
}