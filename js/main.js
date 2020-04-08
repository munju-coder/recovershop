 $(document).ready(function() {

    /**
     * @param string
     * @brief 메인슬라이드 동작.
     */
    $('.main_slide').slick({
        slide: 'div',		
        infinite : true, 		 
        slidesToShow : 1,		
        slidesToScroll : 1,		
        speed : 1500,	 
        arrows : true, 		
        dots : true, 		
        autoplay : true,			
        autoplaySpeed : 4000, 		
        prevArrow : "<i class='slick-prev fas fa-chevron-left'></i>",	
        nextArrow : "<i class='slick-prev fas fa-chevron-right'></i>",		
        dotsClass : "slick-dots", 	
        draggable : true, 
        responsive: [
            {  
                breakpoint: 992, 
                settings: {
                    
                    slidesToShow:1,
                    slidesToScroll : 1
                } 
            },
            { 
                breakpoint: 768, 
                settings: {	
                
                    slidesToShow:1,
                    slidesToScroll : 1
                } 
            },
            { 
                breakpoint: 400,
                settings: {	

                    slidesToShow:1,
                    slidesToScroll : 1
                } 
            }
        ]

    });
    
    /**
     * @param string
     * @brief 메인슬라이드 resize 동작.
     */
    $(window).resize(function() {
        $('.main_slide').slick('resize');
    });
    


}); 
