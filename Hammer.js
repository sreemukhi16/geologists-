class Hammer {
    constructor(x,y ) {
      var options = {
          'restitution':2,
          'friction':1,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y, 150, 40, options);
      this.width = 150;
      this.height = 40;
      
      World.add(world, this.body);
    }
    display(){

      var pos =this.body.position;
      pos.x=mouseX
      pos.y=mouseY
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(3)
    stroke("white")
      
  
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };