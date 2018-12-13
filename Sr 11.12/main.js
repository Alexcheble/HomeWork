$("dt, dd, img").hide();

$(".Gold").click(function(){
	$("dt, dd, img").hide();
	$(".text-gold").not(":visible").slideDown();
	$(".photo-gold").show();
});

$(".Black").click(function(){
	$("dt, dd, img").hide();
	$(".text-black").not(":visible").slideDown();
	$(".photo-black").show();
});

$(".Silver").click(function(){
	$("dt, dd, img").hide();
	$(".text-silver").not(":visible").slideDown();
	$(".photo-silver").show();
});
