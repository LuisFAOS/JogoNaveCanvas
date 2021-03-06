let X_ARROW = [65,68]
let Y_ARROW = [87,83] 

import Spritesheet from '../features/spritesheet.js'
import Shot from './shot.js'
import Explosion from './explosion.js'
import GameOver from '../screens/game-over.js'

export default function Spaceship (context, image, ExplosionImg, keyboard, collider) {
    return {
        id: 'spaceship',
        spritesheet: new Spritesheet(context, image, 3, 2, 100),
        image,
        extraLifes: 3,
        lifesEnded: null,
        context,
        ExplosionImg,
        keyboard,
        x:226,
        y:440,
        collider,
        activate_shot:true,
        update() {
            const increment = 300 * this.animation.time_between_circles / 1000;
            if(keyboard.pressed(X_ARROW[0]) && 
                this.x > 1){
                this.x-=increment
            }
            
            if(keyboard.pressed(X_ARROW[1]) && 
                this.x < this.context.canvas.width - 36){
                this.x+=increment
            }
            
            if(keyboard.pressed(Y_ARROW[0]) && this.y > 50){
                this.y-=increment
            }
            
            if(keyboard.pressed(Y_ARROW[1]) && 
                this.y < this.context.canvas.height - 48){
                this.y+=increment
            }     
        
        },
        draw () {
        if (this.keyboard.pressed(65))
            this.spritesheet.line = 1;
         else if (this.keyboard.pressed(68))
            this.spritesheet.line = 2;
         else
            this.spritesheet.line = 0;      
         
         this.spritesheet.draw(this.x, this.y);
         this.spritesheet.next_frame();
        },
        shot(){
            const shot= new Shot(context,this)
            this.animation.newSprite(shot)
            this.collider.newSprite(shot)
        },
        collision_rectangles(){
            const rets =
            [
                {x: this.x+2, y: this.y+19, width: 9, height: 13},
                {x: this.x+13, y: this.y+3, width: 10, height: 33},
                {x: this.x+25, y: this.y+19, width: 9, height: 13}
            ];
                        
            return rets;  
        },
        collided_with(other){
            if (other.id === 'ovni') {
                this.animation.excludeSprite(this)
                this.animation.excludeSprite(other)
                this.collider.excludeSprite(this)
                this.collider.excludeSprite(other)

                const EnemyExplosion = new Explosion(
                    this.context, this.ExplosionImg, this.x, this.y
                )
                const SpaceShipExplosion = new Explosion(
                    other.context, other.ExplosionImg, other.x, other.y
                )

                this.animation.newSprite(EnemyExplosion)
                this.animation.newSprite(SpaceShipExplosion)
                SpaceShipExplosion.end_explosion = () => {
                    this.extraLifes--
                    if(this.extraLifes > 0) {
                        this.x = 226
                        this.y = 440
                        this.animation.newSprite(this)
                        this.collider.newSprite(this)
                    }
                    else {
                        this.animation.turnOff();
                        for (var i in other.animation.sprites) {
                            if (other.animation.sprites[i].id === 'ovni')
                                other.animation.excludeSprite(other.animation.sprites[i]);
                        }  
                        GameOver(this, keyboard, context)
                    }
                }
            }
        }
    }
}