class Entity {
    constructor(game){
        this.game = game;
        this.y = 0;
        this.x = 0;

        this.width = 0;
        this.height = 0;

        this.xVelocity = 0;
        this.yVelocity = 0;
    }

    update() {
        this.x += this.xVelocity;
        this.y += this.yVelocity;
    }

    intersect(other) {
        return (
            this.y + this.height > other.y &&
            this.y < other.y + other.height &&
            this.x + this.width > other.x &&
            this.x < other.x + other.width
        );
    }
}