    class Paper{
    constructor(x, y, width, height) {
    var options = {
    isStatic:true,
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
    }
    this.paper = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.image = loadImage("paper.jpg");
    World.add(world, this.paper);
    }
    display(){
    var pos = this.paper.position;
    image(this.image, pos.x,pos.y,this.width,this.height);
    }
};