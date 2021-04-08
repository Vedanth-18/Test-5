const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var drops;
var thunder, thunderImg, thunderImg2;
var thunderCreatedFrame;
var thunderGroup;
var umbrella;

function preload(){
    thunderImg = loadImage("1.png");
    thunderImg2 = loadImage("2.png");
}

function setup(){
   createCanvas(1000, 500);
   engine = Engine.create();
   world = engine.world;
   drops = [];
   umbrella = new Umbrella(400, 307);

   thunderCreatedFrame=frameCount;
   var maxDrops=100;
   for(var i=0; i<maxDrops; i++){
    drops.push(new Drops(random(1,1000),random(-50,450) ,PI/1));}}

function draw(){
    background("BLACK");
    //image(thunderImg,300, -20, 190, 210 );
    umbrella.display();
    var maxDrops=100;
    for(var i = 0; i<maxDrops; i++){ 
        drops[i].display(); 
    }
    thunderGroup = new Group();
    // thunderImg = loadImage("1.png");
    // switch(rand){
    //  case 1: thunderImg = loadImage("1.png");
    //  break;
    //  case 2: thunderImg = loadImage("2.png");
    //  break;
    //  case 3: thunderImg = loadImage("3.png");
    //  break;
    //  case 4: thunderImg = loadImage("4.png");
    //  break;
    //  default: break;
    // }
    // console.log(thunderImg);
    var rand = Math.round(random(1,4));
     if(frameCount%30===0){
        thunderCreatedFrame = frameCount;
        thunder = createSprite(random(0,1000), 200, 100, 150);
        thunder.addImage("thunderImg", thunderImg);
        thunder.addImage("thunderImg2", thunderImg2);
        switch(rand){
          case 1: thunder.changeImage("thunderImg", thunderImg);
          break;
          case 2: thunder.changeImage("thunderImg2", thunderImg2);
          break;
          default: break;
        }
      thunderGroup.add(thunder);
      if(thunderCreatedFrame + 5 ===frameCount && thunderGroup){
          console.log("OK");
          thunderGroup.destroyEach();
      }
      drawSprites();
     }
    
    Engine.run(engine);
    Engine.update(engine);
}   


