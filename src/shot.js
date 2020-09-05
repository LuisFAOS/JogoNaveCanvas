export default function shot (context, space_ship){


    return {
        context,
        space_ship,
        width:3,
        height:15,
        positionX: space_ship.positionX + space_ship.image.width / 2 - 4 / 2,
        positionY: space_ship.positionY - 20,
        speed:6,
        color:'red',
        update (){
            this.positionY -= this.speed
        },
        draw(){
            const ctx = this.context
            ctx.save();
            ctx.fillStyle = this.color;
            ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
            ctx.restore();
        }
    }
} 