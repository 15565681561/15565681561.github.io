$(function(){
			$.ajax({
				type: "post",
				/*
				*citykey城市id
				* */
				url: "http//wthrcdn.etouch.cn/weather_mini?citykey=101010700",
				success: function(results){
					
				var data = jQuery.parseJSON(results); 
				console.log(data)
				  $("#fengxiang").html(data.data.forecast[0].fengxiang);
				  $("#type").html(data.data.forecast[0].type);
				  $("#wendu").html(data.data.wendu);
				  var str=data.data.forecast[0].high.substr(2)
				  $("#high").html(str);
				  var str1=data.data.forecast[0].low.substr(2)
				  $("#low").html(str1);
				},error: function(error){
          
				}
			});
		})