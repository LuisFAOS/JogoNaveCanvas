export default function Animation(context) {
    
    return {
        context,
        sprites: [],
        switchedOn: false,
        processings: [],
        newSprite(sprite) {
            this.sprites.push(sprite);
            sprite.Animation = this
         },
         
         turnOn() {
            this.switchedOn = true;
            this.nextFrame();
         },

         turnOff() {
            this.switchedOn = false;
         },
         newProcessing(processing){
            this.processings.push(processing)
            processing.animation = this
         },
         nextFrame() {
            if ( ! this.switchedOn ) return;
      
            // clean screen each ciclo
            this.clearScreen();
      
            // updating the state
            for (var i in this.sprites)
               this.sprites[i].update();
      
            // drawing the sprites
            for (var i in this.sprites)
               this.sprites[i].draw();
      
            for (let i in this.processings)
               this.processings[i].process()
            // Calling the next lvl
            requestAnimationFrame(() => {
                 this.nextFrame();
            });
         },
         
         clearScreen() {
            const ctx = this.context;
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
         }
    }
}