const burst = new mojs.Burst({
  radius:   { 0: 100 },
  count:    5,
  children: {
    shape:        "circle",
    radius:       20,
    fill:         [ "skyblue", "cornflowerblue", "gray", "#b5bfff", "white" ],
    strokeWidth:  5,
    duration:     2000
  }
});

document.addEventListener( "click", function (e) {
  burst
    .tune({ x: e.pageX, y: e.pageY })
    .setSpeed(3)
    .replay();
});
