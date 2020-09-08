export default function shot (context, space_ship){


    return {
        context,
        space_ship,
        width:3,
        height:15,
        x: space_ship.x + space_ship.image.width / 2 - 4 / 2,
        y: space_ship.y - 20,
        speed:6,
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