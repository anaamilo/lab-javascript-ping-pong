var board = new Board();

$('#start').on('click', function(){
  board.start();
  activatePaddle2();
  var game = setInterval(updateState, intervalTime);
  renderGame();
});

function updateState(){
}

$(document).on('keydown', function(e){
  var target = $("#paddle1").position().top;
  e.preventDefault();
  if(e.keyCode == 38){
    target > 0 ? $("#paddle1").css({top: target-=10}) : "";
  }else if(e.keyCode == 40){
    target < 350 ? $("#paddle1").css({top: target+=10}) : "";
  }
});

function activatePaddle2() {
}

function renderGame(){
}

function renderScore(){
}

function renderBall(){
}

function renderPaddle(){
}
