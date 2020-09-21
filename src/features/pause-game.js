import fire_shot from './fire-shot.js'

export default function pause_game(animation, context, keyboard, spaceship){
    if (animation.switched_on) {
        animation.turnOff();

        context.save()
        context.fillStyle = 'white'
        context.strokeStyle = 'black'
        context.font = '50px arial'
        context.fillText("JOGO PAUSADO!", 160, 200)
        context.strokeText("JOGO PAUSADO!", 160, 200)
        context.restore();
        fire_shot(false, keyboard) 
    }
    else {
        animation.turnOn()
        fire_shot(true, keyboard, spaceship) 
    }
}