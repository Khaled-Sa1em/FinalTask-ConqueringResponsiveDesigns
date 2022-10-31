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

// animation when scrolling
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 0;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
