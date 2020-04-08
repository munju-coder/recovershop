$("document").ready(function(){
    /**
     * @param string
     * @brief health_box toggle
     */
    $('.health_btn .left_btn').click( function(){
        $('.cm_middle').toggle();

    });
    /**
     * @param string
     * @brief health_box reservation
     */
    $.datepicker.setDefaults({
        changeMonth: true, 
        changeYear: true,
        nextText: '다음 달',
        prevText: '이전 달' ,
        currentText: '오늘',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],		
        showButtonPanel: true, 
        currentText: '오늘 날짜', 
        closeText: '닫기', 
        dateFormat: "yy-mm-dd"	
    });	
    $("#calender").datepicker();       
    $('.ui-datepicker').css('font-size', '12px');         
    $('.ui-datepicker select.ui-datepicker-year').css('width', '30%').css('height', '50px').css('font-size','12px');
    $('.ui-datepicker td span, .ui-datepicker td a').css('font-size', '40px');

});
  
$( "#calender" ).datepicker(  
  { onSelect: function(dateText) {  

      $("#calender").val(this.value);
    }
  }       
);