$(document).ready(function() {
	//regla de 3 en una linea de jquery
	$("#boton").click(function(){
		$("#x").val(($("#c").val())*($("#b").val())/($("#a").val()));
	});
});