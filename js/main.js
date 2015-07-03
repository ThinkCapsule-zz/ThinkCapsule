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

$('.page-scroll').hover(function() {
    $('a', $(this).closest('.page-scroll')).css('text-decoration', 'underline');
	}, function() {
    $('a', $(this).closest('.page-scroll')).css('text-decoration', 'none');
});

//*** adding hambyrger button
$('.hamburger').on('click',function(event){
	$('.menu').toggle();
});
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    $('nav .page-scroll').hide();
    $('.hamburger').show();
}
else{
	$('.hamburger').hide();
	$('.menu').hide();
}


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

//*** For opening the applyWindow 

var applyWindow = $('#applyWindow');
var jobDescSection = $('#hideAfterApply');

function openApplyWindow() {
	applyWindow.removeClass('hidden');
	jobDescSection.addClass('hidden');
}

function closeApplyWindow() {
	applyWindow.addClass('hidden');
	jobDescSection.removeClass('hidden');
}
