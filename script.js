const container = document.getElementById("container");
const text = document.getElementById("text");

const totalTime = 7500;
const breathTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

breathAnimation();

function breathAnimation() {
  text.innerText = "Breathe in!";
  container.classList.remove("shrink");
  container.classList.add("grow");

  setTimeout(() => {
    text.innerText = "Hold your breath";

    setTimeout(() => {
      text.innerText = "Breathe out";
      container.classList.add("shrink");
      container.classList.remove("grow");
    }, holdTime);
  }, breathTime);
}

setInterval(breathAnimation, totalTime);
