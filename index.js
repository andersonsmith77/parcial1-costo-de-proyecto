
var cuentas = require('./cuentas');

/*s = sueldo por hora 
  h = cantidad de horas
  c = cantidad de personas 
  m = materiales*/
 
function calcularCosto(s,h,c,m){
	cuentas(s,h,c,m, (error,calculo)=> {
        if (error) {
	        console.log("Error: ", error.message);
	    }
        else {
            console.log("El precio de una persona en el proyecto es " + calculo.sueldoPorPersona());
            console.log("El precio total de todos los empleados es " + calculo.sueldoTotalPersonas());
            console.log("El costo total de proyecto es " + calculo.precioTotalProyecto());
        }
    });
    console.log("---------- Calculo de costos del proyecto ----------");
};
	
/*s = sueldo por hora = 7.50
  h = cantidad de horas = 1152
  c = cantidad de personas = 20
  m = materiales = 200*/
calcularCosto(7.50, 1152, 20, 200)
calcularCosto(0, 1152, 20, 200)