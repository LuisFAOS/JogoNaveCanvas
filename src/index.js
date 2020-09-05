import imgs from './loader-imgs.js'
import Background from './background.js'
import Animation from './animation.js'
import Spaceship from './spaceship.js'
import Keyboard from './keyboard.js'
import Collider from './collider.js'
import Ovni from './ovni.js'
import Shot from './Shot.js'
import newOvni from './ovni.js'

export default function index() {
 
    const canvas = document.getElementById('content-canvas')
    const context = canvas.getContext('2d')

    //applying imgs in background
    const backSpace = new Background(context, imgs[0])
    const backStars = new Background(context, imgs[1])
    const backClouds = new Background(context, imgs[2])
    
    const keyboard = new Keyboard(document)
   
    /* const collider = new Collider()
    collider.newSprite(spaceship)
    collider.newSprite(ovni)
 */
    backSpace.speed = 3;
    backStars.speed = 7;
    backClouds.speed = 10;
    
    
    const animation = new Animation(context)
    
    //const collider = new Collider()
    const spaceship = new Spaceship(context, imgs[3], keyboard)
    //collider.newSprite(spaceship)

    //animation.newProcessing(collider)
    animation.newSprite(backSpace)
    animation.newSprite(backStars)
    animation.newSprite(backClouds)
    animation.newSprite(spaceship)
    
    setInterval(()=> newOvni(context,imgs[4], animation),1000)

    keyboard.firedIt(32, ()=>{
        spaceship.shot()
    })  

    animation.turnOn() 

}
