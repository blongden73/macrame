$(document).ready(function () {
	// We'll read the rate from each <div>.
  $(".parallax").each(function () {
    var $this = $(this);

    // We need to remember the element's original
    // top offset as a reference point.
		$this.data("top", $this.offset().top);

    // We've used a custom attribute in the HTML
    // to specify the scrolling rate.
		$this.data("rate", $this.attr("data-parallax-rate"));
	});

	$(window).scroll(function () {
    // Whenever the window scrolls, we reposition
    // each parallax element.
		$(".parallax").each(function () {
			var scrollTop = $(window).scrollTop();
			var rate = $(this).data("rate");
			var thisTop  = scrollTop - scrollTop * rate
			$(this).css("top", $(this).data("top") + thisTop);
		});
	});
});
