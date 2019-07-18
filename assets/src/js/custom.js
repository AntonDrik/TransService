class Clock {

    constructor(options) {
        this.timeZone = options.timeZone;
        this.HTML = options.HTML;
        this.hourHand   = this.HTML.querySelector('.hour.hand');
        this.minuteHand = this.HTML.querySelector('.minute.hand');
        this.secondHand = this.HTML.querySelector('.second.hand');
        this.time = this.HTML.closest('.clocks__item').querySelector('.clocks__time');
        console.log(this.time);

        this.timer();
        setInterval(() => this.timer(), 1000);
    }

    timer() {
        this.sethandRotation('hour');
        this.sethandRotation('minute');
        this.sethandRotation('second');
    }

    sethandRotation(hand) {
        let timeZone = new Date().toLocaleString('en-US', { timeZone: this.timeZone});
        let date = new Date(timeZone), hours, minutes, seconds, percentage, degree;
        switch (hand) {
            case 'hour':
                hours       = date.getHours();
                hand        = this.hourHand;
                percentage  = this.numberToPercentage(hours, 12);
                break;
            case 'minute':
                minutes     = date.getMinutes();
                hand        = this.minuteHand;
                percentage  = this.numberToPercentage(minutes, 60);
                break;
            case 'second':
                seconds     = date.getSeconds();
                hand        = this.secondHand;
                percentage  = this.numberToPercentage(seconds, 60);
                break;
        }

        degree                = this.percentageToDegree(percentage);
        hand.style.transform  = `rotate(${degree}deg) translate(-50%, -50%)`;
        let min = date.getMinutes(), sec = date.getSeconds();
        if (min < 10) min = '0'+min;
        if (sec < 10) sec = '0'+sec; 
        this.time.innerHTML = `${date.getHours()}:${min}:${sec}`;
    }

    numberToPercentage(number = 0, max = 60) {
        return (number / max) * 100;
    }

    percentageToDegree(percentage = 0) {
        return (percentage * 360) / 100;
    }
}

$(document).ready(function() {

	$(window).on('resize', function() {
        windowW = $(window).width();
        if (windowW >= 767) {
            $('#menu').removeAttr('style');
        }
    });

    $(window).scroll(function(e) {
        if ($(window).scrollTop() >= 15) {
            $('.header').addClass('header-active');
        } else {
            $('.header').removeClass('header-active');
        }
    });

    $('[href*="#contacts"]').on("click", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 300);
    });

    $('.menu-mobile__bar').click(function(e) {
        e.preventDefault();
        $('#menu').slideToggle();
    });

	$('.main-slider__slick').slick({
		prevArrow: '<div class="main-slider__prev"></div>',
		nextArrow: '<div class="main-slider__next"></div>',
        dots: true
	});

    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function(item) {
                return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
            }
        },
        zoom: {
            enabled: true,
            duration: 300
        }
    });

    if ($('.widget').length){
        let vancouver = new Clock({
            timeZone: 'America/Vancouver',
            HTML: document.querySelector('.clock-vancouver')
        });

        let newYork = new Clock({
            timeZone: 'America/New_York',
            HTML: document.querySelector('.clock-newyork')
        });

        let london = new Clock({
            timeZone: 'Europe/London',
            HTML: document.querySelector('.clock-london')
        });

        let tokyo = new Clock({
            timeZone: 'Asia/Tokyo',
            HTML: document.querySelector('.clock-tokyo')
        });
    }

    if($('#form-message').length){
        $('#form-message').on('click', function(){
            $(this).next()[0].classList.add('hidden')
        });
        $('#form-message').on('blur', function(){
            if(!$.trim($(this).val()))
            $(this).next()[0].classList.remove('hidden')
        });
    }

});

