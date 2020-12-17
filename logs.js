class log {
constructor(x,y,width,angle){
   var properties = { restitition: 0.1,
                      friction: 1,
                      density: 0.09

                     }
   this.body = Bodies.rectangle(x,y,20,width,properties);
   this.width = width;
   this.height = 20;
   Matter.Body.setAngle(this.body,angle);
   World.add(world,this.body);


}
display(){
   push();
   translate(this.body.position.x,this.body.position.y)
   rotate(this.body.angle)
   rectMode(CENTER);
   fill("white");
   strokeWeight(4);
   stroke("brown")
   rect(0,0,this.width,this.height);
   pop();
}




}