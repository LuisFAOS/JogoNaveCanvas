import shot from "./shot.js";

function Ovni (context, image, keyboard) {
    return {
        id: 'ovni',
        image,
        context,
        speed:0,
        x:0,
        y:0,
        update() { 
            this.y += this.speed;
            if (this.y > this.context.canvas.height) {
                this.animation.excludeSprite(this);
                this.collider.excludeSprite(this);
            }
        },
        draw () {
           const img = this.image 
            this.context.drawImage(img, this.x, this.y, img.width, img.height)
        },
        collision_rectangles(){
            const rets =
            [
                {x: this.x+20, y: this.y+1, width: 25, height: 10},
                {x: this.x+2, y: this.y+11, width: 60, height: 12},
                {x: this.x+20, y: this.y+23, width: 25, height: 7}
            ];
              
            return rets; 
        },
        collided_with(other){
            if (other.id === 'shot') {
                this.animation.excludeSprite(this);
                this.collider.excludeSprite(this);
                this.animation.excludeSprite(other);
                this.collider.excludeSprite(other);
            }
        }
    }
}

function newOvni(context, image, animation, collider){
    const ovni = new Ovni(context,image)
    const canvas = document.getElementById('content-canvas')

    ovni.speed = Math.floor( 5 + Math.random() * (20 - 5 + 1) );
    ovni.x = Math.floor(Math.random() * (canvas.width - image.width + 1) );
    ovni.y = -image.height
    animation.newSprite(ovni)
    collider.newSprite(ovni);
}

export default function createEnemies(context, image, animation, collider){

    const enemyCreator = {
        lastOvni: new Date().getTime(),
        process() {
           const now = new Date().getTime();
           const elapsed = now - this.lastOvni;
           
            if (elapsed > 1000) {
                newOvni(context, image, animation, collider);
                this.lastOvni = now;
            }
        }
     };
     
     animation.newProcessing(enemyCreator);
}