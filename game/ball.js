class Ball extends Entity {
    constructor(game) {
        super(game);

        this.width = 20;
        this.height = 20;
        this.name = "ball";
        this.xVelocity = 5;
        this.yVelocity = 5;

        let player = document.createElement("div");
        player.style.position = "absolute";
        player.style.width = this.width + "px";
        player.style.height = this.height + "px";

        player.style.left = this.x + "px";
        player.style.top = this.y + "px";

        player.setAttribute("id","ball");

        this.player = player;

        game.canvas.append(player);

    }

    draw() {
        let ball = this.player;
        ball.style.left = this.x + "px";
        ball.style.top = this.y + "px";
    }

    reset() {
        this.x = this.game.width / 2 - this.width // Centered Horizontally 
        this.y = this.game.height / 2 - this.height // Centered Vertically

        let min = -5 , max = 5;

        this.yVelocity = Math.floor(Math.random() * (max - min + 1) + min);
        this.xVelocity = Math.random() > 0.5 ? 5 : -5;
    }

    update() {
        super.update();

        if(this.y > this.game.height - this.height || this.y < 0){
            this.yVelocity *= -1;
        }

        if(this.x > this.game.width) {
            this.game.player.score += 1;
            this.reset();
        }

        if(this.x < 0) {
            this.game.bot.score += 1;
            this.reset();
        }

        var hitter;
        if(this.intersect(this.game.bot)) {
            hitter = this.game.bot;
        }
        else if(this.intersect(this.game.player)){
            hitter = this.game.player;
        }

        if(hitter) {
            this.xVelocity *= -1.1;
            this.yVelocity *= -1.1;

            this.yVelocity += hitter.yVelocity / 2;
        }
    }
}