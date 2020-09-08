export default function createEnemies(context, image, animation, collider){

    const enemyCreator = {
        lastOvni: new Date().getTime(),
        process() {
           const now = new Date().getTime();
           const elapsed = now - this.lastOvni;
           
            if (elapsed > 1000) {
                newOvni(context, image, animation, collider);
                this.lastOvni = now;
            }
        }
     };
     
     animation.newProcessing(enemyCreator);
}