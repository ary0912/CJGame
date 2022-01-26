console.log("This is Action Game");
score = 0;
cross = true;

audio = new Audio("gameover.mp3");
audiogo = new Audio("music.mp3");
audiog = new Audio("shit.mp4")
setTimeout(() => {
  audiogo.play();
}, 1000);
document.onkeydown = function (e) {
  console.log("Key code is:", e.keyCode);
  if (e.keyCode == 38) {
    carl = document.querySelector(".carl");
    carl.classList.add("animateCarl");
    setTimeout(() => {
      carl.classList.remove("animateCarl");
    }, 700);
  }
  if (e.keyCode == 39) {
    carl = document.querySelector(".carl");
    carlX = parseInt(
      window.getComputedStyle(carl, null).getPropertyValue("left")
    );
    carl.style.left = carlX + 112 + "px";
  }
  if (e.keyCode == 37) {
    carl = document.querySelector(".carl");
    carlX = parseInt(
      window.getComputedStyle(carl, null).getPropertyValue("left")
    );
    carl.style.left = carlX - 112 + "px";
  }
};

setInterval(() => {
  carl = document.querySelector(".carl");
  gameOver = document.querySelector(".gameOver");
  obstacle = document.querySelector(".obstacle");

  dx = parseInt(window.getComputedStyle(carl, null).getPropertyValue("left"));
  dy = parseInt(window.getComputedStyle(carl, null).getPropertyValue("top"));

  ox = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("left")
  );
  oy = parseInt(
    window.getComputedStyle(obstacle, null).getPropertyValue("top")
  );

  offsetX = Math.abs(dx - ox);
  offsetY = Math.abs(dy - oy);
  //console.log(offsetX, offsetY);
  if (offsetX < 83 && offsetY < 62) {
    gameOver.innerHTML = "Game Over- Here we go again";
    obstacle.classList.remove("obstacleAni");
    audio.play();
    setTimeout(() => {
      audio.pause();
      audiogo.pause();
      audiog.play();
    }, 4000);
  } else if (offsetX < 145 && cross) {
    score += 1;
    updateScore(score);
    cross = false;
    setTimeout(() => {
      cross = true;
    }, 1000);
    setTimeout(() => {
      aniDur = parseFloat(
        window
          .getComputedStyle(obstacle, null)
          .getPropertyValue("animation-duration")
      ); //Want exact vlaue
      newDur = aniDur - 0.1;
      obstacle.style.animationDuration = newDur + "s";
      console.log("New Animation Duration", newDur);
    }, 500);
  }
}, 100);

function updateScore(score) {
  scoreCont.innerHTML = "Your Score:" + score;
}
