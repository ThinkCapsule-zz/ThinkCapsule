//*** Adds scrolling functionality

$('a[href^="#"]').on('click', function(event) {

    var target = $( $(this).attr('href') );

    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }

});


//*** For the job descriptions

var careersText1 = $('.careersText1');
var careersText2 = $('.careersText2');
var careersText3 = $('.careersText3');

// Refactor this, never repeat yourself

function showCareersText1() {
	careersText2.addClass('hidden');
	careersText3.addClass('hidden');
	careersText1.removeClass('hidden');

}


function showCareersText2() {
	careersText3.addClass('hidden');
	careersText1.addClass('hidden');
	careersText2.removeClass('hidden');
}

function showCareersText3() {
	careersText2.addClass('hidden');
	careersText1.addClass('hidden');
	careersText3.removeClass('hidden');
}
