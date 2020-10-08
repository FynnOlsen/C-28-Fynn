class SlingShot{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10     
        }
            this.pointB = pointB;
        
        
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){       
        
        // bodyA is available or not 

        if (this.sling.bodyA){          
            
            // do this only when bodyA is avaibale

            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        

           else{
            // if bodyA is null them  do nothing
           }
        }

    }
   
    fly(){         
        
        // makeing bodyA null

        this.sling.bodyA = null;
    }

}

