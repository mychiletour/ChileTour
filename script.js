$(document).ready(function() {
	
	$("#tour").hide();
	$("#entretenimiento").hide();

	$("#s1").click(function() {
		$("#tour").hide();
		$("#entretenimiento").hide();
		$("#vina").show();
	});
	$("#s2").click(function() {
		$("#tour").show();
		$("#entretenimiento").hide();
		$("#vina").hide();
	});
});
