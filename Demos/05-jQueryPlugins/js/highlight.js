	(function($) {

	function onClick(e) {
		var $target = $(e.target);
			$sibs = $target.siblings();

		$sibs.removeClass("highlight");

		$target.addClass("highlight");
	}	

	$.fn.highlight = function() {
		$(this).on("click", onClick);
	};

	}) (jQuery);