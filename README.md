<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Tabla de Amortización </title>
        <!--CSS-->
        <link href="css/dataTables.bootstrap.css" rel="stylesheet">
        <link href="css/sb-admin-2.css" rel="stylesheet">
        <!--JS-->
        <script src="js/API/jquery-3.2.1.min.js"></script>
        <script src="js/ACCIONES/accionesWeb.js"></script>
        <script src="js/API/jquery.PrintArea.js"></script>
		<script src="js/API/jquery.number.js"></script>
	</head>
    <body>
        <div id="page-wrapper">
            <div class="row">
				<h1 class="page-header"><i class="fa fa-bitcoin fa-fw"></i> Tabla de Amortización</h1>
				<div class="col-sm-12">
                    <h2 class="page-header"><i class="fa fa-yen fa-fw"></i> Datos prestamo</h2>
				    <div class="col-sm-4">
                    <h3>Nombre</h3>
                    <input type="text" class="form-control">
                    <h3>Tipo de Identificación</h3>
                    <select class="form-control" id="cedula">
                        <option>Cedula de Ciudadania</option>
                        <option>Cedula de Extrangeria</option>
                        <option>Tarjeta de Identidad xD</option>
                    </select>
                    <h3>Número Identificación</h3>
                    <input type="text" id="identificacion" name="number" class="form-control" value="">
                </div>
				<div class="col-sm-4">
					<h3>Monto del prestamo</h3>
                    <input type="text" id="monto" class="form-control" name="number" value="">
					<h3>Plazos anuales</h3>
                    <select class="form-control" id="plazo">
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                    </select>
                    <h3>Periodicidad</h3>
                    <select class="form-control" id="periodicidad">
                        <option>Mensual</option>
                        <option>Bimestral</option>
                        <option>Trimestral</option>
                    </select>
				</div>
                <div class="col-sm-4">
                    <h3>Efectivo Anual</h3>
                    <div class="form-group input-group">
                        <span class="input-group-addon">%</span>
                        <input type="number" id="efectivoAnual" class="form-control" value="" min="0" max="100">
                    </div>
                    <h3>Nominal Anual</h3>
                    <div class="form-group input-group">
                        <span class="input-group-addon">%</span>
                        <input type="number" id="nominalAnual" class="form-control" value="" min="0" max="100">
                    </div>
                    <h3>Interes Periodico</h3>
                    <div class="form-group input-group">
                        <span class="input-group-addon">%</span>
                        <input type="number" id="interesPeriodico" class="form-control" value="" min="0" max="100">
                    </div>
					<div class="col-sm-12">
						<div class="col-sm-6">
						<input type="button" class="btn btn-primary" id="calcular" value="Calcular">
						</div>
						<div class="col-sm-6">                    
						<input type="button" class="btn btn-primary" id="imprimir" value="Imprimir Tabla">
						</div>
					</div>
				</div>
                </div>
<!-- 				<div class="col-sm-12">
						<div id="prueba"></div>
				</div> -->
            </div>
            <div class="row">
                <div class="col-sm-12" id="myPrintArea">
				<h1 class="page-header"><i class="fa fa-briefcase fa-fw"></i> Cuota Igual a capital</h1>
                    <div class="panel panel-default">
                        <div class="panel-body">
                            <table width="100%" class="table  table-bordered" id="tabla-amort">
                                <thead>
                                    <tr>
                                        <th>Periodo</th>
										<th>Fecha</th>
										<th>Saldo de Capital</th>
										<th>Amortización a Capital</th>
										<th>Amortización a Intereses</th>
										<th>Flujo de Caja</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
					<h1 class="page-header"><i class="fa fa-briefcase fa-fw"></i> Cuota Igual a capital</h1>
					<div class="panel panel-default">
                        <div class="panel-body">
                            <table width="100%" class="table  table-bordered" id="cuotas-ig">
                                <thead>
                                    <tr>
                                        <th>Periodo</th>
										<th>Fecha</th>
										<th>Saldo de Capital</th>
										<th>Amortización a Capital</th>
										<th>Amortización a Intereses</th>
										<th>Cuota de Caja</th>
										<th>Flujo de Caja</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div id="error"></div>
                </div>
            </div>
        </div>
    </body>
</html>
