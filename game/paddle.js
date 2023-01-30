class Paddle extends Entity {
    constructor(game) {
        super(game);

        this.width = 20;
        this.height = 100;
        this.score = 0;
        this.speed = 10;

        this.y = game.height / 2 - this.height; // Centered Vertically
    }

    update() {
        super.update();

        this.y = Math.min(Math.max(this.y,0), this.game.height - this.height);
    }
}