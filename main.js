var MouseEvent = "empty";

var LastX, LastY;

canvas = document.getElementById("myCanvas");

ctx = canvas.getContext("2d");
color = "lightblue";
width = 1;

canvas.addEventListener("mousedown", myMouseDown)
function myMouseDown(e)
{
  color = document.getElementById("color").value;
  width = document.getElementById("width").value;
  MouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", myMouseUp);
function myMouseUp(e)
{
  MouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", myMouseLeave);
function myMouseLeave(e)
{
  MouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", myMouseMove);
function myMouseMove(e)
{
  currentmousex = e.clientX - canvas.offsetLeft;
  currentmousey = e.clientY - canvas.offsetTop;

  if (MouseEvent == "mousedown")
  {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    console.log("last position of x = " + LastX + " and y = " + LastY);
    ctx.moveTo(LastX, LastY);
    console.log("current position of x = " + currentmousex + " and y = " + currentmousey);
    ctx.lineTo(currentmousex, currentmousey);
    ctx.stroke();
  }
  LastX = currentmousex;
  LastY = currentmousey;
}

function ClearArea()
{
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}