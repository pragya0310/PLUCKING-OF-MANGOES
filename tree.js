class Tree {
    constructor(x, y, width, height) {
        var options = {
            'restitution':0,
            'friction':0,
            'density':0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("tree.png");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image,870, 200, this.width, this.height);
        pop();
      }
}