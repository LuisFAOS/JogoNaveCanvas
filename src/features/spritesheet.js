export default function Spritesheet(context, image, num_lines, num_columns, interval){
    return {
        context,
        image,
        num_lines,
        num_columns,
        interval,
        line:0,
        column:0,
        last_time:0,
        next_frame(){

            const date_now = new Date().getTime();

            if (! this.last_time) this.last_time = date_now;

            if (date_now - this.last_time < this.interval) return;

            if (this.column < this.num_columns - 1)
                this.column++;
            else
                this.column = 0;

            this.last_time = date_now;
        },
        draw(x, y){
            const frame_width = this.image.width / this.num_columns;
            const frame_height = this.image.height / this.num_lines;
            this.context.drawImage(
                this.image,
                frame_width * this.column,
                frame_height * this.line,
                frame_width,
                frame_height,
                x,
                y,
                frame_width,
                frame_height
            );
        }
    }
}