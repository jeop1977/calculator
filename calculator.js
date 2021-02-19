function operacion(){
    
    let valor = (document.getElementById("numero")).value;
    
    
    if (valor.indexOf("+") != -1){

        let operador = valor.indexOf("+");
        let num_1 = valor.substring(0, operador);
        let num_2 = valor.substring(operador+1);

        let num1 = Number(num_1);
        let num2 = Number(num_2);
        
        let res = num1+num2;
        console.log(res);

        solucion.innerHTML = res;
    } else if(valor.indexOf("-") != -1){

        let operador = valor.indexOf("-");
        let num_1 = valor.substring(0, operador);
        let num_2 = valor.substring(operador+1);

        let num1 = Number(num_1);
        let num2 = Number(num_2);

        let res = num1-num2;
        console.log(res);

        solucion.innerHTML = res;
    } else if(valor.indexOf("*") != -1){

        let operador = valor.indexOf("*");
        let num_1 = valor.substring(0, operador);
        let num_2 = valor.substring(operador+1);

        let num1 = Number(num_1);
        let num2 = Number(num_2);

        let res = num1*num2;
        console.log(res);

        solucion.innerHTML = res;
    } else if(valor.indexOf("/") != -1){

        let operador = valor.indexOf("/");
        let num_1 = valor.substring(0, operador);
        let num_2 = valor.substring(operador+1);

        let num1 = Number(num_1);
        let num2 = Number(num_2);

        let res = num1/num2;
        console.log(res);

        solucion.innerHTML = res;
    } else {
        solucion.innerHTML = "ERROR!!!";
    }
}