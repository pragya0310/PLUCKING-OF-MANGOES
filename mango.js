
class Mango
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
            friction:1,
            }
			this.x = x
			this.y = y
			/**
			 * REMOVED WIDTH, HEIGHT KEPT ONLY RADIUS
			 */
			this.r= r
			        
    this.image = loadImage("Mango.png")	
	this.body=Bodies.circle(this.x, this.y, this.r, options)
	
	World.add(world, this.body);

	}
	display()
	{
			push()
			imageMode(CENTER)
			//strokeWeight(3);
			//fill(255,0,255)
/**
 * DREW IMAGE WITH THE RADIUS VALUE
 * NOTE: PHYSICS ENGINE BODY CONSIDERS IT A DIAMETER, SO WE MULTIPLIED RADIUS BY 2 
 */
		image(this.image,this.body.position.x,this.body.position.y, this.r*2, this.r*2);
		pop()
			
	}

}