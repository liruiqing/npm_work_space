"use strict";
(function() {
    let mail_arr = ["@126.com","@163.com","@sina.com","@21cn.com","@sohu.com","@yahoo.com.cn","@tom.com","@qq.com","@etang.com","@eyou.com","@56.com","@x.cn","@chinaren.com","@sogou.com","@citiz.com"]
    let latter_arr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","1","2","3","4","5","6","7","8","9","0","_","-"]
    exports.getMail = function(){
        var mail = '';
        var len = randNum(5,16);
        for(var i=0;i<len;i++){
            mail += latter_arr[Math.floor(Math.random()*latter_arr.length)]
        }
        return mail +''+mail_arr[Math.floor(Math.random()*mail_arr.length)]
    };

    function randNum(minnum , maxnum){
        return Math.floor(minnum + Math.random() * (maxnum - minnum));
    }
    for (var i=0;i<1000;i++){
       console.log(exports.getMail())
    }
})()