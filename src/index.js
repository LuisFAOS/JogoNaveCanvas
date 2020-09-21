import imgs from './features/imgs-loader.js'
import Collider from './features/collider.js'
import Animation from './features/animation.js'
import Keyboard from './features/keyboard.js'
import pause_game from './features/pause-game.js'
import fire_shot from './features/fire-shot.js'
import musics from './features/musics-loader.js'

import Background from './elements/background.js'
import Spaceship from './elements/spaceship.js'
import create_enemies from './features/create-enemies.js'

export default function index() {
    
    const canvas = document.getElementById('content-canvas')
    const context = canvas.getContext('2d')

    //applying imgs in background
    const backSpace = new Background(context, imgs[0])
    const backStars = new Background(context, imgs[1])
    const backClouds = new Background(context, imgs[2])
    
    const keyboard = new Keyboard(document)
   
    backSpace.speed = 70;
    backStars.speed = 150;
    backClouds.speed = 500;
    
   
    const animation = new Animation(context)
    const collider = new Collider()
    const spaceship = new Spaceship(context, imgs[3], imgs[5],keyboard)
    
    animation.newSprite(backSpace)
    animation.newSprite(backStars)
    animation.newSprite(backClouds)
    animation.newSprite(spaceship)

    animation.newProcessing(collider)

    collider.newSprite(spaceship)
   
    create_enemies(context, imgs[4], animation, collider)

    fire_shot(true, keyboard, spaceship) 

    keyboard.firedIt(13, ()=> {
        pause_game(animation, context, keyboard, spaceship)
    })

    animation.turnOn() 
    musics()
}
