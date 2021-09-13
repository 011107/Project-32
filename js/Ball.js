class Ball {
  constructor(x, y, r) {
    let options = {
      restitution: 0.8
    };
this.body=Matter.Bodies.circle(x,y,r,options)
 World.add(world,this.body) 
 this.r=r
  }

  show() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    ellipseMode(CENTER);
  ellipse(pos.x,pos.y,this.r,this.r)
    pop();
  }
}
