class Umbrella{
    constructor(x,y){
        this.umbrella=Bodies.circle(x,y,65,{isStatic:true});
        this.x=x;
        this.y=y;
        this.umbrellaImage=loadImage("walking_1.png");
        this.radius=65;
        World.add(world, this.umbrella);
    }
    display(){
       var pos = this.umbrella.position;
       imageMode(CENTER);
       image(this.umbrellaImage, pos.x, pos.y+70, 300, 300);
    }
}