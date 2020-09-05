
function Ovni (context, image, keyboard) {
    return {
        image,
        context,
        speed:0,
        x:0,
        y:0,
        update() { 
            this.y += this.speed;
        },
        draw () {
           const img = this.image 
            this.context.drawImage(img, this.x, this.y, img.width, img.height)
        }
    }
}

export default function newOvni(context, image, animation){
    const ovni = new Ovni(context,image)
    const canvas = document.getElementById('content-canvas')

    ovni.speed = Math.floor( 5 + Math.random() * (20 - 5 + 1) );
    ovni.x = Math.floor(Math.random() * (canvas.width - image.width + 1) );
    ovni.y = -image.height
    animation.newSprite(ovni)
}