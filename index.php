<?php
	
	// 可以加载外部文件
	// include './views/index.html';

	// include './views/login.html';

	// $pathinfo = 'login';

	// $_POST $_GET $_FILES 全局数组
	
	// 可以获服务器相关信息，其中PATH_INFO可以获得地址参数
	// print_r($_SERVER);
	
	// 获得用户地址信息
	$pathinfo = $_SERVER['PATH_INFO'];

	// echo $pathinfo; // /index/index

	// include './views/index/index.html';

	// include './views/user/list.html';

	// 假如pathinfo不为空
	if($pathinfo) {
		// 将$pathinfo拆成数组，判断数组长度
		// 来确定$pathinfo的类型
		// explode 用来将字符串拆成数组，类似JS中split()
		// substr 用来截取字符串，类似JS中substr()
		$pathinfo = explode('/', substr($pathinfo, 1));
		// count php系统函数，用于计算数组长度
		// echo count($pathinfo);
		if(count($pathinfo) == 1) {
			// echo $pathinfo[0];
			// 长度等于1要取 views/index目录下的内容
			$path = 'index/' . $pathinfo[0];
		} else {
			$path = $pathinfo[0] . '/' . $pathinfo[1];
		}

	} else {
		$path = 'index/index';
	}

	// 拼凑真实路径，返回给浏览器
	include('./views/' . $path . '.html');









