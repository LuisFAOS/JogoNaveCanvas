import imgs from './features/imgs-loader.js'
import Collider from './features/collider.js'
import Animation from './features/animation.js'
import Keyboard from './features/keyboard.js'
import fire_shot from './features/fire-shot.js'
import soundtrack from './features/soundtrack-loader.js'

import pause_game from './screens/pause-game.js'

import Background from './elements/background.js'
import Spaceship from './elements/spaceship.js'
import create_enemies from './features/create-enemies.js'
import Panel from './elements/panel.js'

export default function index() {
    
    const canvas = document.getElementById('content-canvas')
    const context = canvas.getContext('2d')

    //applying imgs in background
    const backSpace = new Background(context, imgs.SpaceBackground)
    const backStars = new Background(context, imgs.StarsBackground)
    const backClouds = new Background(context, imgs.CloudsBackground)
    
    const keyboard = new Keyboard(document)
   
    backSpace.speed = 70;
    backStars.speed = 150;
    backClouds.speed = 500;
    
   
    const animation = new Animation(context)
    const collider = new Collider()
    const spaceship = new Spaceship(context, imgs.SpaceshipSprites, imgs.explosion, keyboard)
    
    const panel = new Panel(context, spaceship);
    
    animation.newSprite(backSpace)
    animation.newSprite(backStars)
    animation.newSprite(backClouds)
    animation.newSprite(panel)
    animation.newSprite(spaceship)
    
    animation.newProcessing(collider)
    
    collider.newSprite(spaceship)
   
    create_enemies(context, imgs.Ovni, animation, collider)

    fire_shot(true, keyboard, spaceship) 

    keyboard.firedIt(13, ()=> {
        pause_game(animation, context, keyboard, spaceship)
    })

    animation.turnOn() 

    collider.when_colliding =(element1, element2)=>{
        if((element1.id === 'shot' && element2.id === 'ovni') ||
        (element1.id === 'ovni' && element2.id === 'shot')){
                panel.score += 10
            }
    }
    
    soundtrack()
    
}
