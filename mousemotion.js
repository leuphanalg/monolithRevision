var c1 = new mojs.Shape({
  shape:"circle",
  radius:{
    20:40
  },
  stroke:"white",
  strokeWidth:{
    20:0
  },
  fill:"none",
  left:0,
  top:0,
  duration:200
});
var ripples = [];
var colors = ["skyblue", "cornflowerblue", "gray", "#b5bfff", "white"];
for (var i = 0; i < 4; i++){
  var c2 = new mojs.Shape({
    parent: c1.el,
    shape:"circle",
    radius:{
      0:"rand(10,30)"
    },
    stroke:colors[i],
    strokeWidth:{
      10:0
    },
    fill:"none",
    left:"50%",
    top:"50%",
    x:"rand(-50, 50)",
    y:"rand(-50, 50)",
    delay:100
  });
  ripples.push(c2);
}
document.addEventListener("dblclick", function(e){
  c1.tune({
    x:e.pageX,
    y:e.pageY
  }).replay();
  for(var i=0; i<ripples.length; i++){
    ripples[i].generate().replay();
  }
})
