/**
 * Created by Lenovo on 2016/6/28.
 * 自定义js文件，使用$作为命名,让其与jQuery的$起冲突
 */
window.$ = {
    say: function () {
        alert("my customer $ function");
    }
}
function say(){

}
say.add=function(){
    alert("www.");
}
//window.jQuery={
//    myjQuery:function(){
//        alert("my jQuery........");
//    }
//}
