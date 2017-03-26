
/**************************/
	$(".nav-add-link-add").click(function() {
    $(this).prev()[0].click(); 
});

	$(".nav-add-link-edit").click(function() {
    $(this).prev()[0].click(); 
});

	$(".nav-add-link-zakazi").click(function() {
    $(this).prev()[0].click(); 
});

	$(".nav-add-link-users").click(function() {
    $(this).prev()[0].click(); 
});

	$(".nav-add-link-settings").click(function() {
    $(this).prev()[0].click(); 
});


	$(".tab-item").not(":first").hide();
	$(".tab").click(function() {
	$(".tab").removeClass("active-panel-adm").eq($(this).index()).addClass("active-panel-adm");
	$(".tab-item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active-panel-adm"); 