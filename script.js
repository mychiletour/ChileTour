$(document).ready(function() {
	var pesos = true;
var exchange = 620;
	$("#sant").show();
	$("#vina").hide();
	$("#ski").hide();
	$("#playa").hide();
	$("#ent").hide();
	$("#nos").hide();
	$("#molde").hide();

	$("#s1").click(function() {
		$("#vina").hide();
		$("#ski").hide();
		$("#playa").hide();
		$("#ent").hide();
		$("#nos").hide();
		$("#sant").show();
	});

	$("#s2").click(function() {
		$("#sant").hide();
		$("#ski").hide();
		$("#playa").hide();
		$("#ent").hide();
		$("#nos").hide();
		$("#vina").show();
	});

	$("#s3").click(function() {
		$("#sant").hide();
		$("#vina").hide();
		$("#playa").hide();
		$("#ent").hide();
		$("#nos").hide();
		$("#ski").show();
	});

	$("#s4").click(function() {
		$("#sant").hide();
		$("#vina").hide();
		$("#ski").hide();
		$("#nos").hide();
		$("#ent").hide();
		$("#playa").show();
	});

	$("#s5").click(function() {
		$("#sant").hide();
		$("#vina").hide();
		$("#ski").hide();
		$("#playa").hide();
		$("#nos").hide();
		$("#ent").show();
	});

	$("#s6").click(function() {
		$("#sant").hide();
		$("#vina").hide();
		$("#playa").hide();
		$("#ski").hide();
		$("#ent").hide();
		$("#nos").show();
	});

	$(".vmaipo").click(function() {
		$("#vmaipo").slideToggle();
		var $this = $(".toggm");
		var toggled = $this.hasClass("fa-chevron-circle-down");
		$this.toggleClass("fa-chevron-circle-up fa-chevron-circle-down");
	});

	$(".vcasa").click(function() {
		$("#vcasa").slideToggle();
		var $this = $(".toggc");
		var toggled = $this.hasClass("fa-chevron-circle-down");
		$this.toggleClass("fa-chevron-circle-up fa-chevron-circle-down");
	});

	$(".vcolcha").click(function() {
		$("#vcolcha").slideToggle();
		var $this = $(".toggco");
		var toggled = $this.hasClass("fa-caret-square-o-down");
		$this.toggleClass("fa-chevron-circle-up fa-chevron-circle-down");
	});

	$("#pre").click(function() {
		$("#preguntas").slideToggle();
	});
	
	
	$(".precios").click(function() {
		$('#mess').hide();
		if (pesos == true) {
			precio = $(".precios").text().replace(/[^0-9]/gi, '');
			precio /= exchange;
			resultado = Math.round(precio);
			$(".precios").text(resultado + " USD");
			pesos = false;
		} else {
			precio *= exchange;
			resultado = Math.round(precio);
			$(".precios").text(resultado.toLocaleString() + " CLP");
			pesos = true;
		}
	});
});
