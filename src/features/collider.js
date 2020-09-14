export default function Collider(){
    return {
        sprites: [],
        when_colliding: null,
        sprites_exclude: [],
        newSprite(sprite){
            this.sprites.push(sprite)
            sprite.collider = this
        },
        process() {
            let tested = {}

            for (const first_i in this.sprites) {
                for (const second_i in this.sprites) {
                    
                    if(first_i == second_i) continue

                    let id1 = this.uniqueString(this.sprites[first_i])
                    let id2 = this.uniqueString(this.sprites[second_i])

                    if (! tested[id1]) tested[id1] = [];
                    if (! tested[id2]) tested[id2] = [];

                    if (! (tested[id1].indexOf(id2) >= 0 ||
                            tested[id2].indexOf(id1) >= 0) ) {

                        this.collisionTest(this.sprites[first_i], this.sprites[second_i])
                        
                        tested[id1].push(id2);
                        tested[id2].push(id1);
                    }
                }
            }
            this.processExclusions();
        },
        uniqueString(sprite) {
            let str = '';
            const rectangles = sprite.collision_rectangles();
      
            for (var i in rectangles) {
               str += 'x:' + rectangles[i].x + ',' +
                      'y:' + rectangles[i].y + ',' +
                      'l:' + rectangles[i].width + ',' +
                      'a:' + rectangles[i].height + '\n';
            }
      
            return str;
         },
        collisionTest(sprite1, sprite2) {
            const rects1 = sprite1.collision_rectangles();
            const rects2 = sprite2.collision_rectangles();

            // Testar as colisões entre eles
            collisions:
            for (let i in rects1) {
                for (let j in rects2) {
                    // Abstraindo a fórmula!
                    if (this.collide_rectangles(rects1[i], rects2[j])) {
                    // Eles colidem, vamos notificá-los
                        sprite1.collided_with(sprite2);
                        sprite2.collided_with(sprite1);
                    // Tratador geral
                        if (this.when_colliding) this.when_colliding(sprite1, sprite2);
                    // Não precisa terminar de ver todos os retângulos
                    break collisions;
                    }
                }
            }
        },
        processExclusions(){
            var newArray = [];
      
            for (var i in this.sprites) {
               if (this.sprites_exclude.indexOf(this.sprites[i]) == -1)
                    newArray.push(this.sprites[i]);
            }
            
            this.sprites_exclude = [];
            
            this.sprites = newArray;
        },
        collide_rectangles(rect1, rect2) {

            return (rect1.x + rect1.width) > rect2.x &&
             rect1.x < (rect2.x + rect2.width) &&
             (rect1.y + rect1.height) > rect2.y &&
             rect1.y < (rect2.y + rect2.height);
        },
        excludeSprite(sprite){
            this.sprites_exclude.push(sprite);
        } 
    }
}