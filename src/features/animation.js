export default function Animation(context) {
    
    return {
        context,
        sprites: [],
        switched_on: false,
        processings: [],
        sprites_exclude: [],
        time_between_circles: 0,
        last_circle: 0,
        processings_exclude: [],
        newSprite(sprite) {
            this.sprites.push(sprite);
            sprite.animation = this
         },
         
         turnOn() {
            this.switched_on = true;
            this.nextFrame();
         },

         turnOff() {
            this.switched_on = false;
         },
         newProcessing(processing){
            this.processings.push(processing)
            processing.animation = this
         },
         nextFrame() {
            if ( ! this.switched_on ) return;
            const date_now = new Date().getTime();
            if (this.last_circle == 0) this.last_circle = date_now;
            this.time_between_circles = date_now - this.last_circle;
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

            this.processExclusions()
            // Calling the next lvl
            requestAnimationFrame(() => {
                 this.nextFrame();
            });

            this.last_circle = date_now
         },
         clearScreen() {
            const ctx = this.context;
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
         },
         excludeSprite(sprite) {
            this.sprites_exclude.push(sprite);
         },
         excludeProcess(processing) {
            this.processings_exclude.push(processing);
         },
         processExclusions() {

            const new_sprites = [];
            const new_processings = [];
            
            for (var i in this.sprites) {
               if (this.sprites_exclude.indexOf(this.sprites[i]) == -1)
                  new_sprites.push(this.sprites[i]);
            }
            
            for (var i in this.processings) {
               if (this.processings_exclude.indexOf(this.processings[i])
                   == -1)
                   new_processings.push(this.processings[i]);
            }
            
            this.sprites_exclude = [];
            this.processings_exclude = [];
            
            this.sprites = new_sprites;
            this.processamentos = new_processings;
         }
    }
}