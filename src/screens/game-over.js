import imgs from '../features/imgs-loader.js'

export default function GameOver(spaceship, keyboard, context){

    spaceship.activate_shot = false

    keyboard.firedIt(13, null);
    keyboard.firedIt(32, null)  

    context.drawImage(imgs.SpaceBackground, 0, 0, 500,

    500);

    context.save();
    context.fillStyle = 'white';
    context.strokeStyle = 'black';
    context.font = '70px sans-serif';
    context.fillText("GAME OVER", 40, 200);
    context.strokeText("GAME OVER", 40, 200);
    context.restore();

}