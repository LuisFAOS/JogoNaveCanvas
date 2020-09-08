let X_ARROW = [65,68]
let Y_ARROW = [87,83] 

import Shot from './shot.js'

export default function Spaceship (context, image, keyboard, collider) {
    return {
        image,
        context,
        keyboard,
        x:226,
        y:440,
        collider,
        update() {
            const CanvasWidth=this.context.canvas.width+10
            const CanvasHeight=this.context.canvas.height-20

            if(keyboard.pressed(X_ARROW[0]) && this.x > 1){
                this.x-=5
            }
            if(keyboard.pressed(X_ARROW[1]) && this.x < CanvasWidth - this.image.height){
                this.x+=5
            }
            if(keyboard.pressed(Y_ARROW[0]) && this.y > 50){
                this.y-=5
            }
            if(keyboard.pressed(Y_ARROW[1]) && this.y < CanvasHeight - this.image.width){
                this.y+=5
            }     
        
        },
        draw () {
            const img = this.image
            this.context.drawImage(img, this.x, this.y, img.width, img.height)
        },
        shot(){
            const shot= new Shot(context,this)
            this.animation.newSprite(shot)
            this.collider.newSprite(shot)
        },
        collision_rectangles(){
            const rets =
            [
                {x: this.x+2, y: this.y+19, width: 9, height: 13},
                {x: this.x+13, y: this.y+3, width: 10, height: 33},
                {x: this.x+25, y: this.y+19, width: 9, height: 13}
            ];
            // Desenhando os retângulos para visualização
            /* const ctx = this.context;
            for (let i in rets) {
                ctx.save();
                ctx.strokeStyle = 'yellow';
                ctx.strokeRect(rets[i].x, rets[i].y, rets[i].width, rets[i].height);
                ctx.restore();
            } */
                        
            return rets;  
        },
        collided_with(other){
            if (other instanceof Object) {
                this.animation.turnOff();
            }
        }
    }
}