 $(document).ready(function() {

    /**
     * @param string
     * @brief header 왼쪽 small 슬라이드 동작.
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
     * @brief 메인슬라이드 동작.
     */
    $('.main_slide').slick({
        slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
        infinite : true, 	//무한 반복 옵션	 
        slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
        slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
        speed : 1500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows : true, 		// 옆으로 이동하는 화살표 표시 여부
        dots : true, 		// 스크롤바 아래 점으로 페이지네이션 여부
        autoplay : true,			// 자동 스크롤 사용 여부
        autoplaySpeed : 4000, 		// 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        prevArrow : "<i class='slick-prev fas fa-chevron-left'></i>",		// 이전 화살표 모양 설정
        nextArrow : "<i class='slick-prev fas fa-chevron-right'></i>",		// 다음 화살표 모양 설정
        dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
        draggable : true, 	//드래그 가능 여부 
        responsive: [ // 반응형 웹 구현 옵션
            {  
                breakpoint: 992, //화면 사이즈 960px
                settings: {
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow:1,
                    slidesToScroll : 1
                } 
            },
            { 
                breakpoint: 768, //화면 사이즈 768px
                settings: {	
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
                    slidesToShow:1,
                    slidesToScroll : 1
                } 
            },
            { 
                breakpoint: 400, //화면 사이즈 768px
                settings: {	
                    //위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
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
    
    /**
     * @param string
     * @brief header 메뉴버튼 클릭시 header left 메뉴 펼쳐짐. 
     */
    $('.menu_btn,.hdl_close').click( function(){
    
        $(".hd_wrap").toggle();
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
