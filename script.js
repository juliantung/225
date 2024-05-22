$(document).ready(function(){
    // Form animation
    $(".form").on('click', function(){
        $(this).addClass('active');
    });

    $(".submit").on('click', function() {
        $(this).parent().parent().hide(300);
        $(".ok_message").addClass("active");
    });
/** 
    $(".ok_message").on('click', function() {
        $(this).removeClass("active");
        $(".form").removeClass("active").show();
    });
**/
    // Star rating functionality
    let rating = 0;

    window.highlightStars = function(num) {
        for (let i = 1; i <= num; i++) {
            $(`#ratings .star:nth-child(${i})`).addClass('highlighted');
        }
    };

    window.resetStars = function() {
        $('#ratings .star').removeClass('highlighted');
    };

    window.rate = function(num) {
        rating = num;
        resetStars();
        highlightStars(num);
        var pageTitle = document.getElementById('pageTitle');
        if (num <= 3) {
            pageTitle.textContent = "Tell us more";
            $('#ratings').hide();
            $('#feedback').show().addClass('active');
        } else {
            window.open('https://g.page/r/CR4Koahp2uHYEBM/review');
            window.location.href = 'https://yewdigitallock.com.sg/digital-locks/digital-door-locks/';
        }
    };
});



