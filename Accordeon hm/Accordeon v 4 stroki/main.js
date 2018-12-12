// $(".accordeon dd").hide().prev().click(function(){
// 	$(".accordeon dd").not(this).slideUp();
// 	$(this).next().not(":visible").slideDown();	
// });
$(".accordeon dd").hide().prev().click(function(){
	$(this).next().slideUp();
	$(this).next().not(":visible").slideDown();
});