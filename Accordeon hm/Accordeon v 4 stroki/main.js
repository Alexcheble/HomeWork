$(".accordeon dd").hide().prev().click(function(){
	$(".accordeon dd").not(this).slideUp();
	$(this).next().not(":visible").slideDown();	
});