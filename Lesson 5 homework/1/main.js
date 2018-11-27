holst.addEventListener('click', function () {
    var target = this;
    var figure = document.createElement('div');
    figure.className = 'figure';
    target.appendChild(figure);
    figure.style.left=event.clientX + 'px';
	figure.style.top=event.clientY + 'px';
})