holst.addEventListener('click', function(){
	var block = document.createElement('div');
	for (var i = 0; i < document.querySelectorAll('.figura-element').length; i++) { 
		if (document.querySelectorAll('.figura-element')[i].checked === true ) {
		var figure = document.querySelectorAll('.figura-element')[i].value;
		break
		}
	}
	block.classList.add('block', figure);
	this.appendChild(block);
	block.style.left = event.clientX + -20 +'px';
	block.style.top = event.clientY + -20 +'px';
})