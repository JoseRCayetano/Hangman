function drawHead(){
    var canvas = document.getElementById("hangman");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(180, 100, 30, 0, 2 * Math.PI);
    ctx.stroke();
}
function drawBody(){
    var c = document.getElementById("hangman");
    var ctx = c.getContext("2d");
    ctx.moveTo(180,250);
    ctx.lineTo(180,130);
    ctx.stroke();
}
function drawLeftHand (){
    var c = document.getElementById("hangman");
    var ctx = c.getContext("2d");
    ctx.moveTo(150,200);
    ctx.lineTo(180,140);
    ctx.stroke();
}
function drawRightHand (){
    var c = document.getElementById("hangman");
    var ctx = c.getContext("2d");
    ctx.moveTo(210,200);
    ctx.lineTo(180,140);
    ctx.stroke();
}
function drawLefFoot(){
    var c = document.getElementById("hangman");
    var ctx = c.getContext("2d");
    ctx.moveTo(150,300);
    ctx.lineTo(180,250);
    ctx.stroke();
}
function drawRightFoot(){
    var c = document.getElementById("hangman");
    var ctx = c.getContext("2d");
    ctx.moveTo(210,300);
    ctx.lineTo(180,250);
    ctx.stroke();
}
function drawHang(){
   
    var c = document.getElementById("hangman");
    var ctx = c.getContext("2d");
    ctx.fillStyle = "brown";
    //Palos
    ctx.fillRect(0, 380, 300, 100); 
    ctx.fillRect(30, 10, 20, 400);
    ctx.fillRect(30, 10, 220, 20);
    //Esquina
    ctx.moveTo(50,90);
    ctx.lineTo(100,30);
    ctx.stroke();
    //Rope
    ctx.moveTo(180,30);
    ctx.lineTo(180,70);
    ctx.stroke();
   
}
drawHead();
drawBody();
drawLeftHand();
drawRightHand();
drawLefFoot();
drawRightFoot();
drawHang();