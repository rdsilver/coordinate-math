$(function() {
	$("#formulaInput").on('keyup', function (e) {
		// On Enter
	    if (e.keyCode == 13) {
	        formula = $(this).val();
	        $(this).blur()
	    }
	});
});