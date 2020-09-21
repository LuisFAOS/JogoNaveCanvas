import Spritesheet from "../features/spritesheet.js";

export default function Explosion (context, image, x, y){
    const EXPLOSION_SOUND = new Audio()
    EXPLOSION_SOUND.src = 'http://localhost/JogoNaveCanvas/assets/snd/explosion.mp3'
    EXPLOSION_SOUND.volume = 0.2
    EXPLOSION_SOUND.load()
    EXPLOSION_SOUND.currentTime = 0.0
    EXPLOSION_SOUND.play()

    return {
        context,
        image,
        spritesheet: new Spritesheet(context, image, 1, 5, 75),
        x,
        end_explosion: null,
        y,
        update(){

        },
        draw(){
            this.spritesheet.draw(this.x, this.y)
            this.spritesheet.next_frame();
            this.erase();
        },
        erase(){
            this.spritesheet.end_cicle = ()=>{
                this.animation.excludeSprite(this)
                if(this.end_explosion) this.end_explosion();
            }
        }
        
    }
}
