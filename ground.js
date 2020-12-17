class Ground{

constructor(){
    
    var fixed = {isStatic : true}
    this.body = Bodies.rectangle(200, 350, 800, 50, fixed);
    World.add(world,this.body);


}

display(){

    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, 800, 50);





}


}