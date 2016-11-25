"use strict";
(function() {
    let phone_arr = [139,138,137,136,135,134,159,158,157,150,151,152,188,187,182,183,184,178,130,131,132,156,155,186,185,176 ,133,153,189,180,181,177];

    exports.getPhoneNumber = function(){
        return phone_arr[Math.floor(Math.random()*phone_arr.length)]+''+filter_num_01(Math.floor(Math.random()*100000000),8)
    }

    //数字前面补0
    function filter_num_01(num, n) {
        n = n||2;
        var len = num.toString().length;
        while(len < n) {
            num = "0" + num;
            len++;
        }
        return num;
    };
})()