function Keyboard(element){

    this.element = element

    this.KeysPressed = []

    element.addEventListener('keydown', (event)=>{
        this.KeysPressed[event.keyCode] = true
    })
    element.addEventListener('keyup', (event)=>{
        this.KeysPressed[event.keyCode] = false
    })

}

Keyboard.prototype = {
    pressed: function(key){
        return this.KeysPressed[key]
    }
}

export default Keyboard