(function() {
	'use strict';
	
	var btn = document.getElementById('btn');
	
	btn.addEventListener('click', function() {
		var n = Math.floor(Math.random() * 3);
		if(n == 0) {
			this.textContent = '大吉'
		}else if(n == 1) {
			this.textContent = '吉'
		}else if(n == 2) {
			this.textContent = '祥吉'
		}
	});
	btn.addEventListener('mousedown', function() {
		this.className = 'pushed';
	});
	btn.addEventListener('mouseup', function() {
		this.className = '';
	});
})();