class Chain{
    constructor(body1,body2){
        var options = {
            bodyA:body1,
            bodyB:body2,
            length:70,
            stiffness:1
        }
        this.body=Constraint.create(options);
        World.add(world,this.body);

    }
    display(){
        line(this.body.bodyA.position.x,this.body.bodyA.position.y,
            this.body.bodyB.position.x,this.body.bodyB.position.y)
    }
}