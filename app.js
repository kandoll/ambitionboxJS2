var canvas = document.querySelector("canvas");
var w = (canvas.width = 500);
var h = (canvas.height = 400);
var c = canvas.getContext("2d");

var colorArray = [
  "red",
  "blue",
  "green",
  "yellow",
  "violet",
  "pink",
  "grey",
  "darkblue",
  "orange",
  "lightpink"
];

window.addEventListener("onclick", function(event) {});

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = "red";
    c.stroke();
    c.fillStyle = this.color;

    c.fill();
  };

  this.update = function() {
    if (this.x + this.radius > w || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > h || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}

var circleArray = [];

for (var i = 0; i < 10; i++) {
  var radius = 10;

  var x = Math.random() * (w - radius * 2) + radius;
  var dx = 3;
  var y = Math.random() * (h - radius * 2) + radius;
  var dy = 3;
  circleArray.push(new Circle(x, y, dx, dy, 20));
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, w, h);
  //   circle.update();

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

animate();
