(function($){
    $.fn.shuffle = function() {
 
        var allElems = this.get(),
            getRandom = function(max) {
                return Math.floor(Math.random() * max);
            },
            shuffled = $.map(allElems, function(){
                var random = getRandom(allElems.length),
                    randEl = $(allElems[random]).clone(true)[0];
                allElems.splice(random, 1);
                return randEl;
           });
 
        this.each(function(i){
            $(this).replaceWith($(shuffled[i]));
        });

        return $(shuffled);
    };
 
})(jQuery);

$(document).ready(function() {
	$('.slider').slider({interval: 4000});
	$('#skill-chips li').shuffle();
    $('.sidenav').sidenav({draggable: true});
//	$('#skill-chips').waypoint(function() {
//		console.log("testing waypoint");
//		showElementsWithDelay($('#skill-chips li'));
//	});
    M.toast({html: "Just an example of a toast", classes: "rounded"});
});

function showElementsWithDelay(els) {
	if (! els[0].classList.contains("visible")) {
		$(els[0]).addClass("visible");
	}

	if (els.length > 1) {
		setTimeout(function() {
			showElementsWithDelay(els.slice(1))
		}, 100);
	}
}