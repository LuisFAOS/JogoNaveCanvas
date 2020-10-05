export default function soundtrack(){
    const action_music = new Audio();
    action_music.src = 'http://localhost/JogoNaveCanvas/assets/snd/action.mp3'
    action_music.volume = 0.4
    action_music.load()
    action_music.loop = true
    action_music.play()
}