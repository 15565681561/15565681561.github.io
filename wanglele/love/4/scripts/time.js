		var together = new Date();
		together.setFullYear(2021,9,4);//最后一页的时间 年,月,
		together.setHours(0);
		together.setMinutes(0);
		together.setSeconds(0);
		together.setMilliseconds(0);
	      timeElapse(together);
			setInterval(function () {
				timeElapse(together);
			}, 500);
			
			
			
//	☆版权所有 王商博客（http://ws234.com)