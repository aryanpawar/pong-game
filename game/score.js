function Score (game) {
    this.game = game;
    this.score_player1 = document.getElementById("score_player1");
    this.score_player2 = document.getElementById("score_player2");

    this.score_player1.style.left = game.width/2 - 50 - 10 + "px";
    this.score_player1.style.top = 50 + "px";

    this.score_player2.style.left = game.width / 2 + 10 + "px";
}

Score.prototype.draw = function() {
    this.score_player1.innerHTML = "ME: " + this.game.player.score;
    this.score_player2.innerHTML = "BOT: " + this.game.bot.score;
};