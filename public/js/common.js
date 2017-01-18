
	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	// 获取cookie, 将cookie信息读取出来设置为头像
	 
	// var loginfo = $.cookie('loginfo');

	// // loginfo只有登录成功后才会有,否则为空,并且是以字符串形式存在
	
	// // 转成对象
	

	// console.log(loginfo);

	// var tpl = '<!-- 头像 -->\
	// 			<div class="avatar img-circle">\

	// 			'
	// var render = template.compile(tpl);

	// var html = render(loginfo);

	// $('.aside .profile').html(html);
