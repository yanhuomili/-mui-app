var open=function(url,options){
	if(options){
		options=options;
	}else{
		options={}
	}
	mui.openWindow({
		url:url,
		id:url,
		extras:options,
		waiting:{
			title:'加载中...'
		}
	})
}

