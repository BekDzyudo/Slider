// slider

let index = 1;
slidershow(index);
function slidershow(n) {
  let slider = document.getElementsByClassName("myslider");
  let dot = document.getElementsByClassName("dot");

  if (n > slider.length) {
    index = 1;
  }
  if (n < 1) {
    index = slider.length;
  }
  for (let i = 0; i < slider.length; i++) {
    slider[i].style.display = "none";
  }
  for (let i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace("active", "");
  }
  slider[index - 1].style.display = "block";
  dot[index - 1].className += " active";
}

function nextprev(n) {
  slidershow((index += n));
}
function nextnew(n) {
  slidershow((index = n));
}
// ==========================================================

// Accardion

function acc() {
  let btn = document.getElementsByClassName("btn");
  let disc = document.getElementsByClassName("disc");

  for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
      disc[i].classList.toggle("show");
    };
  }
}
acc();
// ===============================================================

// modal

function modal() {
  let my_modal = document.querySelector(".my-modal");
  my_modal.style.display = "block";
}
function close1() {
  let my_modal = document.querySelector(".my-modal");
  my_modal.style.display = "none";
}

// ============================================================
// range

let vil1 = document.querySelector(".vil1");
let vil2 = document.querySelector(".vil2");
let vil3 = document.querySelector(".vil3");
let vil4 = document.querySelector(".vil4");
let vil11 = document.querySelector(".vil11");
let vil22 = document.querySelector(".vil22");
let vil33 = document.querySelector(".vil33");
let vil44 = document.querySelector(".vil44");
vil1.oninput = function () {
  vil11.value = vil1.value;
};
// ============================================================
// form-slider

function formnat() {
  let formblock = document.getElementById("formblock");
  let javob = document.querySelector(".javob");
  let fio = document.getElementById("fio").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  let jfio = document.getElementById("jfio");
  let jage = document.getElementById("jage");
  let jemail = document.getElementById("jemail");
  jfio.innerHTML = fio;
  jage.innerHTML = age;
  jemail.innerHTML = email;
  javob.className += " showblock";
  formblock.reset();
}
function close2() {
  let javob = document.querySelector(".javob");

  javob.className = javob.className.replace("showblock");
}
// =-======================================================

// kalit so'zlar ?????????

let array = ["php", "yaxshi", "salom"];
function kalit() {
  let text = document.getElementById("text").value;
  let h1 = document.getElementById("h1");
}

// =========================================================
let date = new Date();
console.log(date.getFullYear());
