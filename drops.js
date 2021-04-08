class Drops{
    constructor(x,y,radius){
       var options={
           restitution:0.1,
           friction:0.0000000000000000000000000000001
       }
       this.body = Matter.Bodies.circle(x,y,radius, options);
       this.x=x;
       this.y=y;
       this.radius=radius;
       World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var radius = this.body.radius;
        fill("BLUE");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 10);   
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body, {x:random(0,1000),y: random(0,500)});
          }
    }
}