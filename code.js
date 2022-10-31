const logo_btn = document.getElementsByClassName("logo")[0];
const lists = document.getElementsByClassName("lists")[0];

logo_btn.addEventListener("click", () => {
  lists.classList.toggle("active");
});

const mediaquery = window.matchMedia("(max-width:737px)");

function screenTest(e) {
  if (e.matches) lists.classList.remove("active");
}

mediaquery.addEventListener("change", screenTest);
