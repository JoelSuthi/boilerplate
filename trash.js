class Trash{
    constructor(x, y, width, height,) {
        var options = {
            isStatic:true
            }
    this.trash = Bodies.rectangle(x, y, width, height,options);
    this.width = width;
    this.height = height;
    this.image = loadImage("trash.jpg");
    World.add(world, this.trash);
    }
    display(){
    trash.x = this.trash.position.x
    trash.y = this.trash.position.y
    image(this.image, this.x, this.y,this.width,this.height);
    }
    };