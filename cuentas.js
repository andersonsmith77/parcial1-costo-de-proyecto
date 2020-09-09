
/*s = sueldo por hora 
  h = cantidad de horas
  c = cantidad de personas 
  m = materiales*/

module.exports = (s,h,c,m,callback) => {
	if(s <= 0)
		setTimeout(() => 
            callback(new Error("El sueldo no puede ser cero o menor a este: sueldo por hora = " + s), 
            null),
            1500);
	else if(h <= 0)
		setTimeout(() => 
            callback(new Error("Las horas trabajadas no pueden ser cero o menor a este: horas trabajadas = " + h),
            null),
            1500);	
	else if(c <= 0)
		setTimeout(() => 
            callback(new Error("La cantidad de personas empleadas no puede ser cero o menor a este: cantidad de empleados = " + c),
            null),
            1500);	
	else
		setTimeout(() => 
            callback(null, {
                sueldoPorPersona: () => (s*h),
                sueldoTotalPersonas:() => c*(s*h),
                /*Holgura del 8%*/
                precioTotalProyecto: () => ((c*(s*h) + m) + (0.08*(c*(s*h) + m)))
            }), 
            1500);			
}