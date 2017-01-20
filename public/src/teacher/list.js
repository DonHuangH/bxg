
define([
    'jquery',
    'template'
], function($,template) {
    
    // 发送请求获取数据
    // /api http://api.botue.com
    $.ajax({
        url: '/api/teacher',
        type: 'get',
        success: function(info){
            // 将获取到的数据放到页面中
            console.log(info);
            // 调用模板引擎
            // template('tpl',{list: info.result});
			var html = template('teacherTpl', {list: info.result});
            // 添加DOM
            $('#teacherList').html(html);
        }
    })
});