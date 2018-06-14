var $tasa_interes, $anualidad, $tabla;
var tasaEA,nominalA,InteresP,cuotas;
var AmortCapital, cuotas, monto, montoFijo, interes, nombre,identificacion,anualidad;
var anualidad2,saldoCapital,amortizacionCapital,amortizacionInteres,cuotaFija,flujoCaja,cuotaCaja;
var fecha,salida;
//Fallos
// correguir flujo de caja anualidad
function obtenerValores(){
	n=0;
	var temporal;
	$("select").change(
		function(){
			switch($("#periodicidad").val()){
				case "Mensual":
				n=12;
				cuotas=n*$("#plazo").val();
				break;
				case "Bimestral":
				n=6;
				cuotas=n*$("#plazo").val();
				break;
				case "Trimestral":
				n=4;
				cuotas=n*$("#plazo").val()
				break;
			}
		}
	);
	switch($("#periodicidad").val()){
				case "Mensual":
				n=12;
				cuotas=n*$("#plazo").val();
				break;
				case "Bimestral":
				n=6;
				cuotas=n*$("#plazo").val();
				break;
				case "Trimestral":
				n=4;
				cuotas=n*$("#plazo").val()
				break;
	}
	$("input").keyup(	
		function(){
			monto = $("#monto").val();
			montoFijo=monto;
			switch($(this).attr("id")){
				case "efectivoAnual":
					tasaEA= $("#efectivoAnual").val()/100;
					InteresP= Math.pow((1+tasaEA),(1/n))-1;
					$("#interesPeriodico").val((InteresP*100).toFixed(2));
					nominalA= InteresP * n;
					$("#nominalAnual").val((nominalA*100).toFixed(2));
					mostrarDatos();
				break;
				case "nominalAnual":
					nominalA=$("#nominalAnual").val();
					InteresP= nominalA/(n*100);
					$("#interesPeriodico").val((InteresP*100).toFixed(2));
					tasaEA= Math.pow((1+InteresP),n)-1;
					$("#efectivoAnual").val((tasaEA*100).toFixed(2));
					mostrarDatos();
				break;
				case "interesPeriodico":
					InteresP= $("#interesPeriodico").val()/100;
					nominalA= InteresP * n;
					$("#nominalAnual").val((nominalA*100).toFixed(2));
					tasaEA=Math.pow(1+InteresP,n)-1;
					$("#efectivoAnual").val((tasaEA*100).toFixed(2));
					mostrarDatos();
				break;
				
			}			
		}
	);
	if($("#prueba").val()>0){
		temporal=$("#prueba").val();
	}

}

function crearTablas(){
	if(monto > 0 && InteresP >0){
		fecha = new Date();
		cuotaFija= monto/cuotas;
		tablaCuotasFijas();
		anualidad=monto*((Math.pow((1+InteresP),cuotas)*InteresP)/(Math.pow((1+InteresP),cuotas)-1));
		tablaCuotasIguales();
		mostrarDatos();
	} else{
		mostrarDatos();
	}
}

function tablaCuotasFijas(){
	var tabla = "";
	var month = fecha.getMonth()+1;
	var day = fecha.getDate();
	var year=fecha.getFullYear();
    for (var i = 0; i <= cuotas; i++) {
        if (i == 0) {
			var prueba = new Number(monto);
			var salida = day + '/' +(month<10 ? '0' : '') + month + '/' +(day<10 ? '0' : '') + year;
            tabla += "<tr>\n\
                        <td>" + i + "</td>\n\
                        <td>"+salida+"</td>\n\
                        <td>"+prueba.toLocaleString()+"</td>\n\
						<td>---</td>\n\
						<td>---</td>\n\
                        <td>" +prueba.toLocaleString()+ "</td>\n\
                      </tr>";
        } else {
				monto-=cuotaFija;
				interes=monto*InteresP;
				flujoCaja=cuotaFija+interes;
				saldoCapital = new Number(monto.toFixed(2));
				amortizacionCapital= new Number(cuotaFija.toFixed(2));
				amortizacionInteres= new Number(interes.toFixed(2));
				cuotaCaja= new Number(flujoCaja.toFixed(2));
				month+=4;
				if(month>12){
					month-=12;
					year+=1;
				}
				salida = day + '/' +(month<10 ? '0' : '') + month + '/' +(day<10 ? '0' : '') + year;
                tabla += "<tr>\n\
                        <td>" + i + "</td>\n\
						<td>"+salida+"</td>\n\
						<td>"+saldoCapital.toLocaleString()+"</td>\n\
                        <td>" + amortizacionCapital.toLocaleString() + "</td>\n\
                        <td>"+amortizacionInteres.toLocaleString() +"</td>\n\
                        <td> -"+ cuotaCaja.toLocaleString() + "</td>\n\
                      </tr>";
        }
    }
	monto=montoFijo;
    $tabla = $(tabla);
    llenarTabla();
}

function tablaCuotasIguales(){
	var tabla = "";
	var month = fecha.getMonth()+1;
	var day = fecha.getDate();
	var year=fecha.getFullYear();
    for (var i = 0; i <= cuotas; i++) {
        if (i == 0) {
			var salida = day + '/' +(month<10 ? '0' : '') + month + '/' +(day<10 ? '0' : '') + year;
            tabla += "<tr>\n\
                        <td>" + i + "</td>\n\
                        <td>"+salida+"</td>\n\
                        <td>" + monto + "</td>\n\
						<td>---</td>\n\
						<td>---</td>\n\
						<td>---</td>\n\
                        <td>" + monto + "</td>\n\
                      </tr>";
        } else {
				interes=monto*InteresP;
				anualidad2=anualidad-interes;
				flujoCaja=anualidad2+interes;
				monto-=anualidad2;
				saldoCapital = new Number(monto.toFixed(2));
				amortizacionCapital= new Number(anualidad.toFixed(2));
				amortizacionInteres= new Number(interes.toFixed(2));
				cuotaFija= new Number(anualidad2.toFixed(2));
				cuotaCaja= new Number(flujoCaja.toFixed(2));
				month+=4;
				if(month>12){
					month-=12;
					year+=1;
				}
				salida = day + '/' +(month<10 ? '0' : '') + month + '/' +(day<10 ? '0' : '') + year;
                tabla += "<tr>\n\
                        <td>" + i + "</td>\n\
						<td>"+salida+"</td>\n\
						<td>"+saldoCapital.toLocaleString()+"</td>\n\
                        <td>"+amortizacionCapital.toLocaleString()+ "</td>\n\
                        <td>"+amortizacionInteres.toLocaleString()+"</td>\n\
						<td>"+saldoCapital.toLocaleString()+"</td>\n\
                        <td>- "+flujoCaja.toLocaleString()+"</td>\n\
                      </tr>";
        }
    }
	monto=montoFijo;
    $tabla = $(tabla);
    llenarTabla2();
}

function mostrarError() {
    $("#error").empty();
    $("#error").append("<h1>Ingresa todos los datos</h1>");
}

function llenarTabla() {
    $("#error").empty();
    $("#tabla-amort").find("tbody").empty();
    $("#tabla-amort").find("tbody").append($tabla);
}

function llenarTabla2() {
    $("#error").empty();
    $("#cuotas-ig").find("tbody").empty();
    $("#cuotas-ig").find("tbody").append($tabla);
}

function imprimirTabla(){
  $("#myPrintArea").printArea();
}

function mostrarDatos(){
	var month = fecha.getMonth()+1;
	var day = fecha.getDate();
	var salida = day + '/' +(month<10 ? '0' : '') + month + '/' +(day<10 ? '0' : '') + fecha.getFullYear();
	temporal="Efectivo Anual :" + tasaEA 
		+ "<br> Interes periodico: " + InteresP
		+ "<br> Tasa Nominal: " + nominalA
		+ "<br> Periodo: " + n
		+ "<br> Cuotas: " + cuotas
		+ "<br> Monto: " + monto
		+ "<br> Anualidad: " + anualidad
		+ "<br> fecha: " + salida;
		$("#prueba").html(temporal);
}

