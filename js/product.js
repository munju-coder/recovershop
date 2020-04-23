$(document).ready( function(){

    /**
     * @param string
     * @brief health_box toggle
     */
    $('.health_btn .left_btn').click( function(){
      $('.cm_middle').toggle();

    });
    //global variable
    var seq = $("#seq").val();
    var product_price = Number(COMMON.form.str_num($(".product_price").text()));
    var product_total_price = Number(COMMON.form.str_num($(".product_total_price").text()));
    var product_amount = Number(COMMON.form.str_num($(".count").val()));

    var sum_price = 0;
    var sum_amount = product_amount;
    var option_price = 0;
        
    //option selectbox click
    $(".pro_select_list").change(function(){
        option_price = Number($(this).val());
        sum_price = product_price + option_price;
        $(".product_total_price").text(COMMON.form.comma(sum_price));

        if(option_price == "" || option_price == "0")
        {
            sum_price = 0;
            option_price = 0;
        }
    });

    //plus btn event
    $(".plus").click(function(){
        sum_amount += 1;
        $(".count").val(sum_amount);
        sum_price = (product_price + option_price) * sum_amount;
        $(".product_total_price").text(COMMON.form.comma(sum_price));
    });

    //minus btn event
    $("#minus").click(function(){
        sum_amount -= 1;
        
        if(sum_amount >= product_amount)
        {
            $(".count").val(sum_amount);
            sum_price = sum_price - (product_price + option_price);
            $(".product_total_price").text(COMMON.form.comma(sum_price));
        }
        else
        {
            $(".count").val(product_amount);
            sum_amount = product_amount;
            alert("최소 구매수량 1개입니다.");
        }
        
    });

    //바로구매
    $(".left_btn").click(function(){
        //옵션이 있을경우 선택 유무 확인

        var btn_text = COMMON.form.trim($(this).text());

        if(btn_text == "검진예약")
        {
            $('.cm_middle').toggle();
        }
        else
        {
            var option_chk = $(".pro_select_list option:selected").val();
            if(option_chk == "")
            {
                alert("옵션을 선택하세요.");
            }
            else
            {
                console.log(product_price);
                console.log(option_price);
                console.log(sum_amount);
                console.log(sum_price);
            }
        }


    });


    $(".right_btn").click(function(){
        //옵션이 있을경우 선택 유무 확인
        var option_chk = $(".pro_select_list option:selected").val();
        if(option_chk == "")
        {
            alert("옵션을 선택하세요.");
        }
        else
        {
            console.log(product_price);
            console.log(option_price);
            console.log(sum_amount);
            console.log(sum_price);
        }

    });

    $(".favorite_icon").click(function(){
        //ajax 처리함.
    });


    /**
     * @param string
     * @brief sub_img click event
     */

    $('.sub_img ul li').each( function(){
        
        $(this).click( function(e){
            e.preventDefault();
            var img = $(this).find('img').attr('src');
            $('.main_img').find('img').attr('src',img);
        });
        

    });


});


