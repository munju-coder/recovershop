$(document).ready( function(){

    /**
     * @param string
     * @brief header sub 슬라이드 동작.
     */
    $('.header_slide').slick({
        slide: 'div',		
        infinite : true, 	
        slidesToShow : 1,		
        slidesToScroll : 1,		
        speed : 1000,	
        arrows : true, 		
        dots : false, 		
        autoplay : true,			
        autoplaySpeed : 700, 		
        prevArrow : ".slick-prev",		
        nextArrow : ".slick-next",		
        dotsClass : "slick-dots", 	
        draggable : true, 	

    });


    /**
     * @param string
     * @brief header left 탭메뉴 탭동작.
     */
    $('.tablinks').each( function(){
        $(this).click( function(){
            
            $(".tablinks").removeClass("f_active");
            $(this).addClass("f_active");
            
        
            $(".tabcontent").removeClass("tab_active");
            $(".tabcontent").css("display", "none");
        
            var chk = $(this).attr("tab_name");
            $('#' + chk).css("display", "block");
        });
    
    });

    /**
     * @param string
     * @brief header 메뉴버튼 클릭시 header left 메뉴 펼쳐짐. 
     */
    $('.menu_btn, .hdl_close, .M_bg').click( function(){ 
        $(".hd_left, .hd_wrap, .M_bg").toggle();

    });

    /**
     * @param string
     * @brief aside right top, bottom 버튼 동작.
     */
    $(".top_btn").click(function () {
        $('html').animate({
            scrollTop: 0
        }, 500);
    });

    $(".bottom_btn").click(function () {
        $('html').animate({
            scrollTop: ($('footer').offset().top)
        }, 500);
    });

});