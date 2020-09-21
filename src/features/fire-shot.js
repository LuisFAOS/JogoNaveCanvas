export default function fire_shot (active, keyboard, spaceship){
    active ? 
        keyboard.firedIt(32, ()=>{
            spaceship.shot()
        })
    :
    keyboard.firedIt(32, null)  
}