import Explosion from './explosion.js'

export default function Ovni (context, image, ExplosionImg) {
    return {
        id: 'ovni',
        image,
        ExplosionImg,
        context,
        speed:0,
        x:0,
        y:0,
        update() { 
            this.y += this.speed;
            if (this.y > this.context.canvas.height) {
                this.animation.excludeSprite(this);
                this.collider.excludeSprite(this);
            }
        },
        draw () {
           const img = this.image 
            this.context.drawImage(img, this.x, this.y, img.width, img.height)
        },
        collision_rectangles(){
            const rets =
            [
                {x: this.x+20, y: this.y+1, width: 25, height: 10},
                {x: this.x+2, y: this.y+11, width: 60, height: 12},
                {x: this.x+20, y: this.y+23, width: 25, height: 7}
            ];
              
            return rets; 
        },
        collided_with(other){
            if (other.id === 'shot') {
                const explosion = new Explosion(
                    this.context, this.ExplosionImg, this.x, this.y
                );

                this.animation.newSprite(explosion);    
                this.animation.excludeSprite(this);
                this.collider.excludeSprite(this);
                this.animation.excludeSprite(other);
                this.collider.excludeSprite(other);
            }
        }
    }
}