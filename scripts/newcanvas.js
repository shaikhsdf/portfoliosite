var canvas = document.getElementById('sdfCanvas');
var heightRatio = 0.48;
// var width = 100;
// canvas.style.width = width;
// canvas.style.height= heightRatio;
// canvas.width = canvas.getBoundingClientRect().width;
// canvas.height = canvas.getBoundingClientRect().height;
ctx = canvas.getContext("2d");
canvas.height = canvas.width * heightRatio;
ctx.font = "12px 'Open Sans'";
ctx.fillStyle = "#ffffff";
ctx.textAlign = "center";
ctx.fillText("Hello,", 200, 200);
  