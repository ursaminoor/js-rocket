var timer = null;
var countdownNumber = 10;

var changeState = function (state) {
	document.body.className = 'body-state' + state;

	clearInterval(timer);
	countdownNumber = 10;
	document.getElementById('countdown').innerHTML = countdownNumber;

	if (state == 2) {
		timer = setInterval(function () {
			countdownNumber--;
			document.getElementById('countdown').innerHTML = countdownNumber;
			if(countdownNumber > 4 && countdownNumber <= 7) {
				//be nervous
				document.getElementById('nervous').className = 'nervous show';
			} else {
				document.getElementById('nervous').className = 'nervous';
			}
			if(countdownNumber > 1 && countdownNumber <= 4) {
				document.getElementById('cant-wait').className = 'cant-wait show';
			} else {
				document.getElementById('cant-wait').className = 'cant-wait';
			}
			if(countdownNumber <= 0) {
				changeState(3);
			}
		}, 500);
	} else if (state == 3) {
		var success = setTimeout(function() 
			{
				var randomNumber = Math.round(Math.random() * 10);
				console.log('random number = ', randomNumber);
				if (randomNumber > 9) { //success
					changeState(4);
				} else {
					changeState(5);
				}
		}, 2000);
	}

}