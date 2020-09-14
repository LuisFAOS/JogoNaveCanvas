export default function shot (context, space_ship){


    return {
        id: 'shot',
        context,
        space_ship,
        width:3,
        height:10,
        x: space_ship.x + 18,
        y: space_ship.y - 3,
        speed:5,
        color:'red',
        update (){
            this.y -= this.speed
            if (this.y < 0) {
                this.animation.excludeSprite(this);
                this.collider.excludeSprite(this);
            }
        },
        draw(){
            const ctx = this.context
            ctx.save();
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
            ctx.restore();
        },
        collision_rectangles(){
            return [ {x: this.x, y: this.y, width: this.width,
                height: this.height} ];
        },
        collided_with(other){

        }
    }
} 