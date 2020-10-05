import Ovni from '../elements/ovni.js'
import imgs from './imgs-loader.js'

function newOvni(context, image, animation, collider){
    const ovni = new Ovni(context, image, imgs.explosion)
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