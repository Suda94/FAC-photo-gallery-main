//Scenery 1
const readMoreBtn = document.querySelector(".read-more-btn");
const desc = document.querySelector(".desc");

readMoreBtn.addEventListener("click", (e) => {
  desc.classList.toggle("show-more");
  if (readMoreBtn.innerText === "+") {
    readMoreBtn.innerText = "-";
  } else {
    readMoreBtn.innerText = "+";
  }
});


//Scenery 2
const readMoreBtn2 = document.querySelector(".read-more-btn-2");
const desc2 = document.querySelector(".desc-2");

readMoreBtn2.addEventListener("click", (e) => {
  desc2.classList.toggle("show-more-2");
  if (readMoreBtn2.innerText === "+") {
    readMoreBtn2.innerText = "-";
  } else {
    readMoreBtn2.innerText = "+";
  }
});

//Scenery 3
const readMoreBtn3 = document.querySelector(".read-more-btn-3");
const desc3 = document.querySelector(".desc-3");

readMoreBtn3.addEventListener("click", (e) => {
  desc3.classList.toggle("show-more-3");
  if (readMoreBtn3.innerText === "+") {
    readMoreBtn3.innerText = "-";
  } else {
    readMoreBtn3.innerText = "+";
  }
});

//Scenery 4
const readMoreBtn4 = document.querySelector(".read-more-btn-4");
const desc4 = document.querySelector(".desc-4");

readMoreBtn4.addEventListener("click", (e) => {
  desc4.classList.toggle("show-more-4");
  if (readMoreBtn4.innerText === "+") {
    readMoreBtn4.innerText = "-";
  } else {
    readMoreBtn4.innerText = "+";
  }
});

//Scenery 5
const readMoreBtn5 = document.querySelector(".read-more-btn-5");
const desc5 = document.querySelector(".desc-5");

readMoreBtn5.addEventListener("click", (e) => {
  desc5.classList.toggle("show-more-5");
  if (readMoreBtn5.innerText === "+") {
    readMoreBtn5.innerText = "-";
  } else {
    readMoreBtn5.innerText = "+";
  }
});

console.log(typeof readMoreBtn);