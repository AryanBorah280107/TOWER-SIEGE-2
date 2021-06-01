class SlingShot {
    constructor(bodyA, pointB){
        var option = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.06,
            length : 40,
        }

        this.sling = Constraint.create(option);
        World.add(world,this.sling);
        this.pointB = pointB;
    }

    attach(body)    {

        this.sling.bodyA = body;
        
    }

    fly()   {

        this.sling.bodyA = null;

    }
    
    display(){

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(5);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
}