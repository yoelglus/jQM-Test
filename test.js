$(document).ready(function () {

    var bodyHeight = $('body').height();

    $('.footer').css('top', window.innerHeight - bodyHeight);

    $('body').bind('touchstart', function () {
        $('.header').css('top', 0);
    });

    var timerHandle;
    var didScroll = false;

    function handleTimer() {
        if (!didScroll) {
            didScroll = true;
            $('body').scrollTop(0);
            return;
        }

        var curScrollTop = $('body').scrollTop();
        $('.header').css('top', curScrollTop);
        $('.footer').css('top', window.innerHeight - bodyHeight + curScrollTop);
        timerHandle = undefined;
    }

    $(this).scroll(function () {
        $('.footer').css('top', 0);
        $('.header').css('top', 0);
                
        if (timerHandle) {
            clearTimeout(timerHandle);
        }
        timerHandle = setTimeout(handleTimer, 100);
    });
});

