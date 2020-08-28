import imgs from './loader-imgs.js'
import Background from './background.js'
import Animation from './animation.js'
import Spaceship from './spaceship.js'
import Keyboard from './keyboard.js'

export default function index() {
 
    const canvas = document.getElementById('content-canvas')
    const context = canvas.getContext('2d')

    //applying imgs in background
    const backSpace = new Background(context, imgs[0])
    const backStars = new Background(context, imgs[1])
    const backClouds = new Background(context, imgs[2])
    
    const keyboard = new Keyboard(document)

    const spaceship = new Spaceship(context,imgs[3],keyboard)


    backSpace.speed = 3;
    backStars.speed = 7;
    backClouds.speed = 10;

    const animation = new Animation(context)
    animation.newSprite(backSpace)
    animation.newSprite(backStars)
    animation.newSprite(backClouds)
    animation.newSprite(spaceship)
    animation.turnOn() 

}
