export default function Animation(context) {
    
    return {
        context,
        sprites: [],
        switchedOn: false,
        newSprite: function(sprite) {
            this.sprites.push(sprite);
         },
         
         turnOn: function() {
            this.switchedOn = true;
            this.nextFrame();
         },

         turnOff: function() {
            this.switchedOn = false;
         },

         nextFrame: function() {
            if ( ! this.switchedOn ) return;
      
            // clean screen each ciclo
            this.clearScreen();
      
            // updating the state
            for (var i in this.sprites)
               this.sprites[i].update();
      
            // drawing the sprites
            for (var i in this.sprites)
               this.sprites[i].draw();
      
            // Calling the next lvl
            requestAnimationFrame(() => {
                 this.nextFrame();
            });
         },
         
         clearScreen: function() {
            const ctx = this.context;
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
         }
    }
}