let navButton = document.getElementById('svg_29'),
lamp = document.getElementById('svg_25');

navButton.addEventListener('click', function (e) {
console.log(lamp.style.display)
lamp.classList.toggle('open');
});

