class Box {
   constructor(x, y, width, height){
    var ball = {restitution: 0.01,
                density: 0.09,
                friction: 0.7
                }
    this.body = Bodies.rectangle(x, y, width, height,ball);
    this.width = width;
    this.height = height;
    World.add(world,this.body);

   }
   display(){
    push()
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle)
    rectMode(CENTER);
    fill("white")
    stroke("brown");
    rect(0,0, this.width, this.height);
    pop();

   }


}