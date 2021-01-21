class Rope{
    constructor(body1,body2, offsetX, offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offsetX, y:this.offsetY}
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
        

    }
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            stroke("#fff");
            fill("black")
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }
}