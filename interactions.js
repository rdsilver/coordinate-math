$(function() {
	$("#formulaInput").on('keyup', function (e) {
		// On Enter
	    if (e.keyCode == 13) {
	        formula = $(this).val();
	        $(this).blur()
	    }

			try {
			  eval(code); 
			} catch (e) {
			  if (e instanceof SyntaxError) {
			      alert(e.message);
			  }
			  formula = 'x + y'
			}
	});
});