$(document).ready(function() {
//    alert("this is working!");

$('a[href*=#]').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);
    return false;
});

$('body').scrollspy({ target: '#navbar-example' })

});
