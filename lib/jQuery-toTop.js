/**
 * Created by Lenovo on 2016/7/3.
 * 返回顶部
 */
(function($){

    /**
     * 默认属性
     * @type {{animate: boolean}}
     */
    var toScollOptions={
        animate:false
    };
    $.fn.toTop=function(options){

        $.extend(toScollOptions,options);
        window.scrollTo(0,0);
    }

})(jQuery)
