export default function Collider(){
    return {
        sprites: [],
        newSprite: function(sprite){
            this.sprites.push(sprite)
            sprite.collider = this
        },
       /*  process: function() {
            this.collisionTest(this.sprites[0] ,this.sprites[1], this.sprites[2])
        },
        collisionTest: function (boll,...players) {
            const playersCrash=players.map(player => player.CollisionHandler())
            const bollCrash=boll.CollisionHandler()
            playersCrash.forEach(player => {
                if (this.Collide(player, bollCrash)) {
                    boll.update(true);
                    return;
                }
            })
                
            
        },
        Collide: function(player, boll) {
            const collideY=player.y <= boll.y+7 && player.heightY >= boll.y-11
            if (player.id==="white" && (player.x >= boll.x && player.widthX <= boll.x) && (collideY)) {
                return true
            }else if(player.id==="gray" && (player.x >= boll.x+10 && player.widthX <= boll.x+10) && (collideY)){
                return true
            }
              
            
        } */
    }
}