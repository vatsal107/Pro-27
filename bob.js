class bob
{
	constructor(body1,bady2,offsetX,offsetY)
	{
        this.offsetX=offsetX
        this.offsetY=offsetY
		var options={
			bodyA:body1,
            bodyB:body2,
			pointB:{x:this.offsetX,y:this.offsetY}
			}
		this.offsetX.rope=Constrraint.create(options)
        World.add(world,this.rope)
	}
	display()
	{
			
	var pointA=this.rope.bodyA.position;
    var pointB=this.rope.bodyB.position;
    
    strokeWeight(2);

    var Anchor1Y=pointB.y+this.offsetY
    var Anchor1X=pointB.x+this.offsetX

    var Anchor2Y=pointB.y+this.offsetY
    var Anchor2X=pointB.x+this.offsetX
			
    line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y)

	}
}