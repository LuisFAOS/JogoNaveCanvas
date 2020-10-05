import index from '../index.js'

const baseURL='http://localhost/JogoNaveCanvas/assets/img/'

const imgs = 
{
    SpaceBackground: null,
    StarsBackground: null,
    CloudsBackground: null,
    SpaceshipSprites: null,
    Ovni: null,
    explosion: null
}

const srcs = [
    'space-background.png',
    'stars-background.png',
    'clouds-background.png',
    'nave-spritesheet.png',
    'ovni.png',
    'boom.png'
]

let loaded = 0;

const callIndex = index

Object.keys(imgs).forEach((image, index) => {
    imgs[image] = new Image(); 
    imgs[image].src = baseURL + srcs[index]
    imgs[image].onload = () => {
        
        loaded++
        if(loaded == Object.keys(imgs).length) callIndex();
    }
});

export default imgs