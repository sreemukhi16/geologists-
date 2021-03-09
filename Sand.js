class Sand {
    constructor(x, y, radius) {
      var options = {
          'restitution':1.3,
          'friction':5,
          'density':1.0
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius =radius;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(3)
      stroke("white")
      
     
  
      fill("orange");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  };