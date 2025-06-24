const box = document.getElementById("box");
let startTime, endTime;

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function getRandomPosition() {
  const maxX = window.innerWidth - 100;
  const maxY = window.innerHeight - 100;
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);
  return { x, y };
}

function showBox() {
  const { x, y } = getRandomPosition();
  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
  box.style.backgroundColor = getRandomColor();
  startTime = new Date().getTime();
  box.classList.add("show");
  box.classList.remove("clicked");
}

box.addEventListener("click", () => {
  endTime = new Date().getTime();
  const reactionTime = (endTime - startTime) / 1000;

  box.classList.add("clicked");
  box.classList.remove("show");

  alert(`🎯 Your reaction time: ${reactionTime.toFixed(2)} seconds`);

  showBox();
});

showBox();
