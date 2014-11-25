jQuery(function($) {

    $(document.body).touchwipe({
        wipeLeft: function () {
            $('#container').addClass('menu-open');
        },
        wipeRight: function () {
            $('#container').removeClass('menu-open');
        },
        preventDefaultEvents: false
    });

    $('.menu-toggle a').click(function(e) {
        e.preventDefault();

        if ($('#container').hasClass('menu-open')) {
            $('#container').removeClass('menu-open');
        } else {
            $('#container').addClass('menu-open');
        }
    });

    $('#page-overlay').click(function() {
        $('#container').removeClass('menu-open');
    });

});