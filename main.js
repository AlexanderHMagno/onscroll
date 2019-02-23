
$(function () {

    

    let modelCtrl = (function () {
        let data, max, percentage, degree, hScreen;

        return {
            calculateScroll: function (info) {

                max = $('.wheelPercentage')["0"].offsetTop;
                data = info.path[1].pageYOffset;
                hScreen = info.path[1].outerHeight;
                percentage = Math.round((data / (max - hScreen)) * 100);
                degree = Math.round(3 * percentage);
            },

            getScrollValue: function () {
                return degree
            }

        };


    })();

    let viewCtrl = (function () {
        let DOMStrings = {
            'scroll': '.wheel',
            'imageBack': '.imageBackground'
        };

        return {

            displayScroll: function (deg) {
                $(DOMStrings.scroll).css('transform', `rotate(${deg}deg)`);
                $(DOMStrings.imageBack).css('left', -deg * 3);
            }
        };

    })();

    let controller = (function (view, model) {

        window.onscroll = function (e) {
            let movement;

            // calculate values 
            model.calculateScroll(e);

            // obtain Values from scroll

            movement = model.getScrollValue();

            //create the view changes

            view.displayScroll(movement);

           
        };




    })(viewCtrl, modelCtrl);

   

    // I will change to the MVC model once I have worked more on it. 


    $('.fa-angle-down').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $(window).scrollTop() + 520
        }, 1500, 'linear');
    });

    $('.fa-angle-up').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $(window).scrollTop() - 520
        }, 1500, 'linear');
    });


    window.ontouchmove = function(event) {
        var x = event.touches[0].clientX;
        var y = event.touches[0].clientY;
        document.getElementById("demo").innerHTML = x + ", " + y;
        $('html, body').animate({
            scrollTop: $(window).scrollTop() + 520
        }, 1500, 'linear');
      }






}) 
