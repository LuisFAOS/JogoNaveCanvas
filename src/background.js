export default function Background(context, image){

    return {
        context,
        image,
        speed: 0,
        emendPosition: 0,
        update: function () {
            this.emendPosition += this.speed
    
            if (this.emendPosition > this.image.height)
                this.emendPosition = 0
        },
        draw: function () {
            const img = this.image
    
            let positionY = this.emendPosition - img.height
            this.context.drawImage(img, 0, positionY, img.width, img.height)
    
            positionY = this.emendPosition
            this.context.drawImage(img, 0, positionY, img.width, img.height)
        }
    }
}