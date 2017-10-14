$(document).ready(function() {
	
	$("#sant").hide();
	$("#vina").show();
	$("#ski").hide();
	$("#ent").hide();
	$("#nos").hide();
	$("#molde").hide();

	$("#s1").click(function() {
	$("#vina").hide();
	$("#ski").hide();
	$("#ent").hide();
	$("#nos").hide();
		$("#sant").show();
	});
	
	$("#s2").click(function() {
	$("#sant").hide();
	$("#ski").hide();
	$("#ent").hide();
	$("#nos").hide();
		$("#vina").show();
	});
	
		$("#s3").click(function() {
			$("#sant").hide();
	$("#vina").hide();
	$("#ent").hide();
	$("#nos").hide();
		$("#ski").show();
	});
	
		$("#s4").click(function() {
	$("#sant").hide();
	$("#vina").hide();
	$("#ski").hide();
	$("#nos").hide();
		$("#ent").show();
	});
	
		$("#s5").click(function() {
	$("#sant").hide();
	$("#vina").hide();
	$("#ski").hide();
	$("#ent").hide();
		$("#nos").show();
	});
	
	
	    jQuery('#hideshow').live('click', function(event) {        
         jQuery('#content').toggle('show');
    });
	
});

