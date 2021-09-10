const burst = new mojs.Burst({
  radius:   { 0: 100 },
  count:    5,
  children: {
    shape:        'circle',
    radius:       20,
    fill:         [ 'deeppink', 'cyan', 'yellow' ],
    strokeWidth:  5,
    duration:     2000
  }
});
document.addEventListener( 'click', function (e) {
  burst
    .tune({ x: e.mouseX, y: e.mouseY })
    .setSpeed(3)
    .replay();
});
