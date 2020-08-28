let X_ARROW = [37,39]
let Y_ARROW = [38,40] 

export default function Spaceship (context, image, keyboard) {
    return {
        image,
        context,
        keyboard,
        positionX:226,
        positionY:440,
        update: function() {
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
        draw: function() {
            const img = this.image
            this.context.drawImage(img, this.positionX, this.positionY, img.width, img.height)
        }
    }
}