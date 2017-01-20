
define([
	'jquery',
	'template',
	'nprogress',
	'cookie'
], function($,template,NProgress) {

	// 检测登录, 以PHP为例
	// 判断是否登录, 就是要检测有没有一个叫PHPSESSID的cookie
	// console.log($.coolie('PHPSESSID'))
	if(location.pathname != '/login' && !$.cookie('PHPSESSID')){
		location.href = '/login';
	}
	
	// 退出登录
	$('#logout').on('click',function(){
		$.ajax({
			url: '/api/logout',
			type: 'post',
			success: function (info) {
				if(info.code == 200) {
					location.reload();
				}
			}
		});
	});
	

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});
	// 获取cookie, 将cookie信息读取出来设置为头像
	
	var loginfo = $.cookie('loginfo');

	// loginfo只有登录成功后才会有,否则为空,并且是以字符串形式存在
	
	// 转成对象
	var loginfo = loginfo && JSON.parse(loginfo);

	console.log(loginfo);

	var tpl = '<!-- 头像 -->\
				<div class="avatar img-circle">\
				<img src = "{{tc_avatar}}">\
				</div>\
				<h4>{{tc_name}}</h4>';
	// 调用模板引擎
	var render = template.compile(tpl);
	// 生成html字符串
	var html = render(loginfo || {});
	// 添加到DOM
	$('.aside .profile').html(html);

	// 加载进度条
	NProgress.start();
	NProgress.done();
});

	

