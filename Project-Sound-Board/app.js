let btnTry = document.querySelector("#mainBtn");
let btn001 = document.querySelector("#btn1");
let btn002 = document.querySelector("#btn2");
let btn003 = document.querySelector("#btn3");
let btn004 = document.querySelector("#btn4");

let audiotry = document.querySelector("#audio-try");
let audio1 = document.querySelector("#audio-001");
let audio2 = document.querySelector("#audio-002");
let audio3 = document.querySelector("#audio-003");
let audio4 = document.querySelector("#audio-004");



btnTry.addEventListener("click", () => {
  stopAudio();
  audiotry.play();
});
btn001.addEventListener("click", () => {
  stopAudio();
  audio1.play();
});
btn002.addEventListener("click", () => {
  stopAudio();
  audio2.play();
});

btn003.addEventListener("click", () => {
  stopAudio();
  audio3.play();
});

btn004.addEventListener("click", () => {
  stopAudio();
  audio4.play();
});

function stopAudio() {
  audiotry.pause();
  audiotry.currentTime = 0;

  audio1.pause();
  audio1.currentTime = 0;

  audio2.pause();
  audio2.currentTime = 0;

  audio3.pause();
  audio3.currentTime = 0;

  audio4.pause();
  audio4.currentTime = 0;
}






















