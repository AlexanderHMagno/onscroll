
$(function () {

 


    let modelCtrl = (function () {
        let data, max, percentage, degree, hScreen;

        return {
            calculateScroll: function (info) {

                max = $('.wheelPercentage')['0'].offsetTop;
                data = info.path[1].pageYOffset;
                hScreen = info.path[1].outerHeight;
                percentage = Math.round((data / (max - hScreen/2)) * 100);
                percentage= percentage>100?100:percentage;
                degree = Math.round(percentage*3.6);
                
            },

           getImgWidth: function(){
                let imageWidth;
               imageWidth = $('.imageBackground')["0"].clientWidth;
               return imageWidth/360;

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

            displayScroll: function (deg,imageW) {
                $(DOMStrings.scroll).css('transform', `rotate(${deg}deg)`);
                $(DOMStrings.imageBack).css('left', +120 - (deg * imageW));
                
            }
        };

    })();

    let controller = (function (view, model) {

        window.onscroll = function (e) {
            let movement, imageWidth;

            // calculate values 
            model.calculateScroll(e);

            // obtain Values from scroll

            movement = model.getScrollValue();
            imageWidth = model.getImgWidth();


            //create the view changes

            view.displayScroll(movement,imageWidth);
      
        };
    });

    controller(viewCtrl, modelCtrl);

   

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

 /* Testing mobile
 */

let movement=0;
$('.imageHolder').on({ 'touchstart' : function(initialTouch){
    let initialValue = 0 ;
$('.imageHolder').on({ 'touchmove' : function(e){ 
   let maxWidth,currentX;

   initialValue = initialTouch.touches[0].clientX;
   console.log(initialValue + "  1")

   console.log(initialValue + "  2")
  
   maxWidth = $('.lateralMovement')[0].clientWidth;
   maxWidth -= (maxWidth*0.25);
   console.log(initialValue + "   3")
    currentX = e.touches[0].clientX;
    console.log("C "+currentX,"I "+initialValue)
    console.log('===============')
console.log('before: '+ movement)
    if(currentX<=initialValue){
        movement-=1;
    }else if(currentX>initialValue){
        movement+=1;
    }
console.log('After: '+ movement)
    $('.lateralMovement').css('margin-left', movement );
    console.log(initialValue + "   4")
    
  /*  if(currentX<initialValue && movement>-maxWidth){
   
   } else if (currentX>initialValue && movement<1){
    $('.lateralMovement').css('margin-left', movement );
   } */
   

} });

}});



}) 
