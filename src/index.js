import imgs from './features/loader-imgs.js'
import Collider from './features/collider.js.js'
import Animation from './features/animation.js.js'
import Keyboard from './features/keyboard.js.js'
import createEnemies from './features/create-enemies.js.js'

import Background from './elements/background.js'
import Spaceship from './elements/spaceship.js'
import create_enemies from './elements/ovni.js'

export default function index() {
 
    const canvas = document.getElementById('content-canvas')
    const context = canvas.getContext('2d')

    //applying imgs in background
    const backSpace = new Background(context, imgs[0])
    const backStars = new Background(context, imgs[1])
    const backClouds = new Background(context, imgs[2])
    
    const keyboard = new Keyboard(document)
   
    backSpace.speed = 3;
    backStars.speed = 7;
    backClouds.speed = 10;
    
   
    const animation = new Animation(context)
    const collider = new Collider()
    const spaceship = new Spaceship(context, imgs[3], keyboard)
    animation.newSprite(backSpace)
    animation.newSprite(backStars)
    animation.newSprite(backClouds)
    animation.newSprite(spaceship)
    animation.newProcessing(collider)

    collider.newSprite(spaceship)
   
    create_enemies(context, imgs[4], animation, collider)

    keyboard.firedIt(32, ()=>{
        spaceship.shot()
    })  

    animation.turnOn() 

}
