/**
 * @brief common object
 */
var COMMON = {};

/**
 * @brief cookie Object
 */
COMMON.cookie = {
    /**
     * @brief 쿠키값 가져오기
     * @param {string} cName 쿠키 지정 값
     * @returns {string} unescape value
     */
    getCookie : function (cName)
    {
        cName = cName + '=';
        var cookieData = document.cookie;
        var start = cookieData.indexOf(cName);
        var cValue = '';

        if(start != -1)
        {
            start += cName.length;
            var end = cookieData.indexOf(';', start);
            if(end == -1)end = cookieData.length;
            cValue = cookieData.substring(start, end);
        }
        return unescape(cValue);
    },
    /**
     * @brief cookie setting
     * @param {string} cName 
     * @param {string} cValue   
     * @param {number} cDay     지속일
     */
    setCookie : function (cName, cValue, cDay)
    {
        let expire = new Date();

        expire.setDate(expire.getDate() + cDay);
        cookies = cName + '=' + escape(cValue) + '; path=/ '; // 한글 깨짐을 막기위해 escape(cValue)를 합니다.

        if(typeof cDay != 'undefined')
        {
            cookies += ';expires=' + expire.toGMTString() + ';';
        }

        document.cookie = cookies;
    },
    /**
     * @brief cookie delete
     * @param {string} name 
     */
    delCookie : function (name)
    {
        let today = new Date();

        today.setTime(today.getTime() - 1);
        let value = get_cookie(name);
        if(value != "")
        {
            document.cookie = name + "=" + value + "; path=/; expires=" + today.toGMTString();
        }
    }
};

/**
 * @brief form data event
 */
COMMON.form = {
    /**
     * @brief html text comma change
     * @param {string} str 
     * @returns {string}
     */
    comma : function(str)
    {
        str = String(str);
        return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
    },
    /**
     * @brief html text comma remove
     * @param {string} str 
     * @returns {string}
     */
    uncomma : function(str) 
    {
        str = String(str);
        return str.replace(/[^\d]+/g, '');        
    },
    /**
     * @brief input num comma
     * @param {string} obj 
     */
    inputNumComma : function(obj)
    {
        obj.value = this.comma(this.uncomma(obj.value));
    },
    /**
     * @brief member product insert & modify pd_price limit(300만원) ? 결제사 제한
     */
    inputNumCommaChk : function(obj)
    {
        let val = this.uncomma(obj.value);
        if(val > 3000000)
        {
            obj.value = 0;
            alert("상품 금액이 300만원 이상을 초과할 수 없습니다.");
        }
        else
        {
            obj.value = this.comma(this.uncomma(obj.value));
        }        
    },
    /**
     * @brief 문자열에서 숫자만 추출
     * @param {string} str
     * @returns {number}
     */
    str_num : function(str)
    {
        let res = str.replace(/[^0-9]/g,"");    
        return res;
    },
    /**
     * @brief 자리수 채우기
     * @param {*} n value
     * @param {*} width 길이
     * @returns {*}
     */
    left_pad : function(n, width)
    {
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;        
    },
    /**
     * @brief 문자열 공백 제거
     * @param {string}} stringToTrim 
     * @returns {string}
     */
    trim : function(stringToTrim)
    {
        var str = stringToTrim.replace(/^\s+|\s+$/g,"");
	
        if(str == "" || str == "undefined")
        {
            str = null;
        }
        
        return str;        
    },
    limitText : function(str, limit)
    {        
        if(str.length > limit)
        {
            alert("글자수가 " + limit + " 자로 제한되어 있습니다.");
        }
    },
    inputPhoneNumber : function (obj) {

        var number = obj.value.replace(/[^0-9]/g, "");
        var phone = "";    
    
        if(number.length < 4) {
            return number;
        } else if(number.length < 7) {
            phone += number.substr(0, 3);
            phone += "-";
            phone += number.substr(3);
        } else if(number.length < 11) {
            phone += number.substr(0, 3);
            phone += "-";
            phone += number.substr(3, 3);
            phone += "-";
            phone += number.substr(6);
        } else {
            phone += number.substr(0, 3);
            phone += "-";
            phone += number.substr(3, 4);
            phone += "-";
            phone += number.substr(7);
        }
        obj.value = phone;
    },
    maxLengthChk : function(object) {
        if (object.value.length > object.maxLength){
            object.value = object.value.slice(0, object.maxLength);
        }        
    }
};


COMMON.mbChk = {
    minLength : 8,  //password str minlength
    maxLength : 15, //password str maxlength
    emailChk : function(email){
        var exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;	

        if(exptext.test(email) == false)
        {
            return false;
        }        
    },
    passwdChk : function(password)
    {
        var pw = password;
        var num = pw.search(/[0-9]/g);
        var eng = pw.search(/[a-z]/ig);
        var spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);
        var _bool = true;
    
        if(pw.length < this.minLength || pw.length > this.maxLength)
        {
            alert(this.minLength + "자리 ~ " + this.maxLength + "자리 이내로 입력해주세요.");
            _bool = false;
        }
    
        if(pw.search(/₩s/) != -1)
        {
            alert("비밀번호는 공백업이 입력해주세요.");
            _bool = false;
        } 
        
        if(num < 0 || eng < 0 || spe < 0 )
        {
            alert("영문,숫자, 특수문자를 혼합하여 입력해주세요.");
            _bool = false;
        }	
        
        return _bool;
    }
};

/**
 * @brief args operation
 */
COMMON.arrOperator = {
    /**
     * @brief array plus sum
     * @param {Array<number>} val 
     * @return {number} sum
     */
    arrPlus : function (val)
    {
        let sum = null;
        for(let i = 0; i < val.length; i++)
        {
            if(val[i] == null || isNaN(val[i]) == true)
            {
                val[i] = 0;
            }
            sum += val[i];
        }
        
        return sum;
    },
    /**
     * @brief array minus sum
     * @param {Array<number>} val
     * @returns {number} sum
     */
    arrMinus : function (val)
    {
        let sum = null;
        for(let i = 0; i < val.length; i++)
        {
            if(val[i] == null || isNaN(val[i]) == true)
            {
                val[i] = 0;
            }
            sum -= val[i];
        }
        
        return sum;        
    },
    arrMuliplication : function(val, amount)
    {
        let sum = null;
        for(let i = 0; i < val.length; i++)
        {
            if(val[i] == null)
            {
                val[i] = null;										
            }
            sum += val[i] * amount;
            
        }
        
        return sum;
    },
    /**
     * @brief 배열 빈값 제거
     * @param {Array<*>} actual
     * @returns {Array<*>} 빈 배열 제거 후 재정렬
     */
    cleanArray : function (actual)
    {
        let newArray = new Array();
        for (let i = 0; i < actual.length; i++) 
        {
          if(actual[i])
          {
            newArray.push(actual[i]);
          }
        }
        return newArray;        
    }
};

/**
 * @brief urlParameter & urlFileName 
 */
COMMON.url = {
    /**
     * @brief url parameter 가져오기
     * @param {string} parameter
     * @returns {string}
     */
    urlParameter : function (parameter)
    {
        let results = new RegExp('[\?&]' + parameter + '=([^&#]*)').exec(window.location.href);
        if (results==null)
        {
           return null;
        }
        else
        {
           return results[1] || 0;
        }
    },
    /**
     * @brief url fileName 가져오기
     * @returns {string}
     */
    urlFileName : function ()
    {
        let filename = document.location.href.split("/").slice(-1).pop();
        let newName = filename.split("?");
        
        return newName[0];
    }
};

COMMON.winOpen = {
    windowOpen : function (url, _top, _left, width, height) 
    {
        window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=" + _top +",left=" + _left +",width=" + width + ",height=" + height);
    }
};

/**
 * @brief daum kakao api "주소 찾기"
 */
COMMON.kakao = {
    DaumPostcode : function (devide)
    {
        daum.postcode.load(function () {
            new daum.Postcode({
                oncomplete: function (data) {
                    
                    let fullAddr = ''; 
                    let extraAddr = '';    
                    
                    if (data.userSelectedType === 'R') { 
                        fullAddr = data.roadAddress;
    
                    } else { 
                        fullAddr = data.jibunAddress;
                    }    
                    
                    if (data.userSelectedType === 'R') {
                        
                        if (data.bname !== '') {
                            extraAddr += data.bname;
                        }
                        
                        if (data.buildingName !== '') {
                            extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                        }
                        
                        fullAddr += (extraAddr !== '' ? ' (' + extraAddr + ')' : '');
                    }				
                    
                    if(devide == "zip_btn")
                    {
                        document.getElementById('mb_zip').value = data.zonecode;
                        document.getElementById('mb_addr_1').value = fullAddr;
                        document.getElementById('mb_addr_2').focus();
                    }
                    else if(devide == "r_zip_btn")
                    {
                        document.getElementById('r_zip').value = data.zonecode;
                        document.getElementById('r_addr_1').value = fullAddr;
                        document.getElementById('r_addr_2').focus();
                    }
                                    
                }
            }).open();
        });        
    }
};

/**
 * @brief REST call
 */
COMMON.ajax = {
    /**
     * @brief ajax call
     * @param {string} _method      GET, POST, PUT, DELETE 
     * @param {string} dir          REST dir
     * @param {object} dataObject   serializeObject
     */
    restfulAjax : function(_method, dir, dataObject) {
        $.ajax({
            type: _method,
            cache : false,
            dataType: "json",
            url: URL + "/REST/"+ dir +"/index.php",
            data: JSON.stringify(dataObject),
            success: function(data)
            {
                alert(data['return_msg']);

                //login 
                if(data['return_cd'] == "0003")
                {
                    location.href = MOBILE_URL;
                }
            },
            error: function(r) {
                alert("통신실패...");
            }
        });
    },
    restfulAjaxReturn : function(_method, dir, dataObject) {
        let rObject;
        let dataObj = null;

        if(_method == "GET")
        {
            dataObj = dataObject;
        }
        else
        {
            dataObj = JSON.stringify(dataObject);
        }

        $.ajax({
            type: _method,
            cache : false,
            async: false,
            dataType: "json",
            url: URL + "/REST/"+ dir +"/index.php",
            data: dataObj,
            success: function(data)
            {
                rObject = data;
            },
            error: function(r) {
                alert("통신실패...");
            }
        });

        return rObject;
    },
    boardList : function(board, sca, sfl, stx, sst, sod, page, limit)
    {
        $.ajax({
            type : "GET",
            dataType: "json",
            url: URL + "/REST/board/"+ board,
            cache : false,		
            data: {'api_key':'123456789', 'sca' : sca, 'sfl' : sfl, 'stx' : stx, 'sst' : sst, 'sod' : sod, 'page' : page, 'limit' : limit },
            success : function(data)
            {
                //추후
            },
            error : function(e)
            {
                alert("통신 실패.");
            }
        });
    }
};


/**
 * @brief serializeObject
 */
$.fn.serializeObject = function() {
    var obj = null;
    try {
        if (this[0].tagName && this[0].tagName.toUpperCase() == "FORM") {
            var arr = this.serializeArray();
            if (arr) {
                obj = {};
                jQuery.each(arr, function() {
                    obj[this.name] = this.value;
                });
            }
        }
    } catch (e) {
        alert(e.message);
    } finally {
    }
 
    return obj;
};

/**
 * @brief serializeFiles
 */
$.fn.serializeFiles = function() {
    var form = $(this),
        formData = new FormData()
        formParams = form.serializeArray();

    $.each(form.find('input[type="file"]'), function(i, tag) {
        $.each($(tag)[0].files, function(i, file) {
        formData.append(tag.name, file);
        });
    });

    $.each(formParams, function(i, val) {
        formData.append(val.name, val.value);
    });

    return formData;
};



