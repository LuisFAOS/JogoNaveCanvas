import index from '../index.js'

const baseURL='http://localhost/JogoNaveCanvas/assets/img/'

const srcs = 
[
'space-background.png',
'stars-background.png',
'clouds-background.png',
'nave-spritesheet.png',
'ovni.png',
'boom.png'
]

const imgs = []

for (let i = 0; i < srcs.length; i++) {
    imgs.push(new Image())
    imgs[i].src = baseURL + srcs[i]
}

let loaded = 0;

imgs.forEach(img => 
    img.onload = ()=>{
        loaded++
        if(loaded == imgs.length) index();
})


export default imgs