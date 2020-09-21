function Keyboard(element){

    this.element = element

    this.KeysPressed = []

    this.fired = [];

    this.firedFunctions = [];

    element.addEventListener('keydown', (event)=>{
        const key = event.keyCode;  // Tornando mais legível ;)
        this.KeysPressed[key] = true

      // Disparar somente se for o primeiro keydown da tecla
      if (this.firedFunctions[key] && !this.fired[key]) {

        this.fired[key] = true;
        this.firedFunctions[key] () ;
      }
    })
    element.addEventListener('keyup', (event)=>{
        this.KeysPressed[event.keyCode] = false
        this.fired[event.keyCode] = false
    })

}

Keyboard.prototype = {
    pressed: function(key){
        return this.KeysPressed[key]
    },
    firedIt(key, callback){
        this.firedFunctions[key] = callback;
    }
}

export default Keyboard