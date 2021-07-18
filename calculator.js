function operacion(){
    
    let valor = (document.getElementById("numero")).value;

    let cifra = [];
    let oper = [];

    if(valor.indexOf("+") != -1 || valor.indexOf("-") != -1 || valor.indexOf("*") != -1 || valor.indexOf("/") != -1){
        
        let residuo = valor;
        let x = 0;
        let signo = ["+", "-", "*", "/"];
        let puesto = [];
        
        while(residuo.indexOf("+") !== -1 || residuo.indexOf("-") !== -1 || residuo.indexOf("*") !== -1 || residuo.indexOf("/") !== -1){

            let lugar = 0;

            for(let i = 0; i < 4; i++){
                if(residuo.indexOf(signo[i]) > 0){
                    puesto[lugar] = residuo.indexOf(signo[i]);
                    lugar++
                }
            }
            
            let posicion = Math.min(...puesto);
            cifra[x] = residuo.substring(0, posicion);
            oper[x] = residuo.substring(posicion, posicion + 1);
            residuo = residuo.substring(posicion + 1);
            x++;
        }
        
    } else {
        solucion.innerHTML = "ERROR!!!";
    }
    
    /*
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
    */
}