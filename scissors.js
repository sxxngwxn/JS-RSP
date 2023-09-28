//input_value_constant
const rsp_input = document.querySelector("#rsp_input");
const my_value = document.querySelector("#my_value");
const enemy_value = document.querySelector("#enemy_value");
const match_result = document.querySelector("#match_result");

const rsp_arr = [0, 1, 2];

const rock = 0;
const scissor = 1;
const paper = 2;

let rsp = null;

rsp_input.addEventListener("change", () => {
  //enemy_random_value
  let bot_rsp_value = rsp_arr[Math.floor(Math.random() * rsp_arr.length)];
  if (bot_rsp_value === 0) {
    enemy_value.innerText = "🪨";
  } else if (bot_rsp_value === 1) {
    enemy_value.innerText = "✂️";
  } else {
    enemy_value.innerText = "📜";
  }

  //my_value
  if (rsp_input.value === "rock") {
    // 0
    rsp = rock;
    my_value.innerText = "🪨";
  } else if (rsp_input.value === "scissor") {
    // 1
    rsp = scissor;
    my_value.innerText = "✂️";
  } else if (rsp_input.value === "egg") {
    // 2
    rsp = paper;
    my_value.innerText = "🥚";
  } else if (rsp_input.value === "paper") {
    // 2
    rsp = paper;
    my_value.innerText = "📜";
  } else {
    rsp = null;
    my_value.innerText = "𝟜𝟘𝟜";
  }

  if (rsp === 0) {
    if (rsp === bot_rsp_value) {
      match_result.innerText = "Draw";
    } else if (bot_rsp_value === 1) {
      match_result.innerText = "Win";
    } else {
      match_result.innerText = "Lose";
    }
  } else if (rsp === 1) {
    if (rsp === bot_rsp_value) {
      match_result.innerText = "Draw";
    } else if (bot_rsp_value === 0) {
      match_result.innerText = "Lose";
    } else {
      match_result.innerText = "Win";
    }
  } else if (rsp === 2) {
    if (rsp === bot_rsp_value) {
      match_result.innerText = "Draw";
    } else if (bot_rsp_value === 0) {
      match_result.innerText = "Win";
    } else {
      match_result.innerText = "Lose";
    }
  } else {
    match_result.innerText = "Please Enter Correct Value";
  }

  console.log(rsp, bot_rsp_value);
  //console.log(rsp_input.value);
});
