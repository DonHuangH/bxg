
define([
    'jquery',
    'cookie'
], function($) {
    // 监听submit事件
    $('#loginForm').on('submit',function(){

        // 通过Ajax将表单数据发送到服务端
        // serialize方法要求表单必须要name否则
        // 是获取不到数据的
        var formData = $(this).serialize();

        // /api http://api.botue.com
        $.ajax({
            url:'/api/login',
            type: 'post',
            data: formData,
            beforeSend:function(){
                console.log('beforeSend');
            },
            success: function (info) {
                if(info.code == 200){
                    alert(info.msg);
                    // 将服务端返回的用户数据 (用户名,头像)
                    // 存到cookie里, 这样其它页面就可以获取
                    // cookie只能为字符串
                    $.cookie('loginfo',JSON.stringify(info.result));
                    location.href = '/';
                }
            },
            error:function(ee){
                console.log(ee);
            },
            /*只要通讯完成了都会执行*/
            complete:function(){
                console.log('complete');
            }
        });

        // 阻止默认提交
        return false;
    });
});