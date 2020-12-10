$(document).ready(function() {
			$('#imageFullScreen1').smartZoom({
				'containerClass': 'zoomableContainer1'
			});
			$('#topPositionMap1,#leftPositionMap1,#rightPositionMap1,#bottomPositionMap1').bind("click", moveButtonClickHandler);
			$('#zoomInButton1,#zoomOutButton1').bind("click", zoomButtonClickHandler);

			function zoomButtonClickHandler(e) {
				var scaleToAdd = 0.8;
				if (e.target.id == 'zoomOutButton1')
					scaleToAdd = -scaleToAdd;
				$('#imageFullScreen1').smartZoom('zoom', scaleToAdd);
			}

			function moveButtonClickHandler(e) {
				var pixelsToMoveOnX = 0;
				var pixelsToMoveOnY = 0;

				switch (e.target.id) {
					case "leftPositionMap1":
						pixelsToMoveOnX = 50;
						break;
					case "rightPositionMap1":
						pixelsToMoveOnX = -50;
						break;
					case "topPositionMap1":
						pixelsToMoveOnY = 50;
						break;
					case "bottomPositionMap1":
						pixelsToMoveOnY = -50;
						break;
				}
				$('#imageFullScreen1').smartZoom('pan', pixelsToMoveOnX, pixelsToMoveOnY);
			}
		});