let X_ARROW = [65,68]
let Y_ARROW = [87,83] 

import Shot from './shot.js'

export default function Spaceship (context, image, keyboard, collider) {
    return {
        image,
        context,
        keyboard,
        positionX:226,
        positionY:440,
        collider,
        update() {
            const CanvasWidth=this.context.canvas.width+10
            const CanvasHeight=this.context.canvas.height-20

            if(keyboard.pressed(X_ARROW[0]) && this.positionX > 1){
                this.positionX-=5
            }
            if(keyboard.pressed(X_ARROW[1]) && this.positionX < CanvasWidth - this.image.height){
                this.positionX+=5
            }
            if(keyboard.pressed(Y_ARROW[0]) && this.positionY > 50){
                this.positionY-=5
            }
            if(keyboard.pressed(Y_ARROW[1]) && this.positionY < CanvasHeight - this.image.width){
                this.positionY+=5
            }     
        
        },
        draw () {
            const img = this.image
            this.context.drawImage(img, this.positionX, this.positionY, img.width, img.height)
        },
        shot(){
            const shot= new Shot(context,this)
            this.Animation.newSprite(shot)
           // this.collider.newSprite(shot)
        }
    }
}