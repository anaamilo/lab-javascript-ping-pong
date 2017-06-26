function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.direction = 0;
  this.move(this.direction);
}

Ball.prototype.randomDirection = function() {
};

Ball.prototype.move = function(direction){
  this.direction = direction;
  var self = this;
  var ballSpeed = 5;
  var ballTop = $("#ball").position().top;
  var ballLeft = $("#ball").position().left;
  var paddleTop = $("#paddle1").position().top;
  var paddleLeft = $("#paddle1").position().left;
  console.log(ballSpeed, ballTop, ballLeft, paddleTop, paddleLeft);
  var intervalId = setInterval(function(){
    switch(self.direction){
      case 0:
        if((paddleTop < ballTop) && (ballTop < paddleTop+50) && (ballLeft < paddleLeft) && (ballLeft > paddleLeft - 10)){
          self.direction = 3;
        }
        if(ballTop > 2 && ballLeft < 898){
          $("#ball").css({top: ballTop-=ballSpeed, left: ballLeft+=ballSpeed});
        }else if(ballLeft > 898){
          self.direction = 3;
        }else{
          self.direction = 1;
        }
        break;
      case 1:
        if(ballTop < 400 && ballLeft < 898){
          $("#ball").css({top: ballTop+=ballSpeed, left: ballLeft+=ballSpeed})
        }else if(ballLeft > 880){
          self.direction = 2;
        }else{
          self.direction = 0;
        }
        break;
      case 2:
        if(ballTop < 400 && ballLeft > 2){
          $("#ball").css({top: ballTop+=ballSpeed, left: ballLeft-=ballSpeed});
        }else if(ballLeft < 2){
          self.direction = 0;
        }else{
          self.direction = 3;
        }
        break;
      case 3:
        if(ballTop > 2 && ballLeft > 2){
          $("#ball").css({top:ballTop-=ballSpeed, left:ballLeft-=ballSpeed});
        }else if(ballLeft < 2){
          self.direction = 0;
        }else{
          self.direction = 2;
        }
        break;
    }
  }, 30);
};

Ball.prototype.pointScored = function(){
};

Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
};

ball = new Ball(0,0);
