holst.addEventListener('click', function () {
    var target = this;
    var figure = document.createElement('div');
    figure.className = 'figure';
    target.appendChild(figure);
    figure.style.left=event.clientX +-20+ 'px';
	figure.style.top=event.clientY +-20+ 'px';
})
