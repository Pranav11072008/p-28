class Stone{
    constructor(x, y,radius) {
    var options={
    isStatic:false,
    restitution:0,
    friction:0.5,
    }

    this.body = Bodies.circle(x, y,radius, options);
    this.radius = radius
    this.image = loadImage("stone.png")
    World.add(world, this.body);
  
}
display(){
  imageMode(RADIUS)
  image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
}
}