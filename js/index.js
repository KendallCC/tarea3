const Fecha=document.getElementById('Fecha');
var hoy=new Date();
var dia=hoy.getDate();
var mes=2
var anio=hoy.getFullYear();

var actual=dia+"-"+mes+"-"+anio
Fecha.innerHTML=actual;
