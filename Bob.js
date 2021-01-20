class Bob{
    constructor(x, y, diameter) {
        var options = {
            'isStatic':true,
            'restitution':0.4,
            'friction':0.5,
            'density':1.2
        }
        this.body = Bodies.circle(x, y, diameter/2, options);
        this.diameter=diameter/2;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.diameter, this.diameter);
        pop();
      }
}