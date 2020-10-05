import Spritesheet from "../features/spritesheet.js";

export default function Panel(context, spaceship){
    return {
        context,
        spaceship,
        score: 0,
        spritesheet: new Spritesheet(context, spaceship.image, 3, 2),
        update(){
        },
        draw(){
            this.context.scale(0.5, 0.5)

            let x = 20

            for (let i = 0; i < this.spaceship.extraLifes; i++) {
                this.spritesheet.draw(x,20)
                x+=40
            }

            this.context.scale(2,2)
            
            var ctx = this.context;
            // Pontuação
            ctx.save();
            ctx.fillStyle = 'white';
            ctx.font = '18px sans-serif';
            ctx.fillText(this.score, 100, 27);
            ctx.restore();

        }
    }
}