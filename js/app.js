// active
let headerLinks = document.getElementById("header__links");
let rightsItem = headerLinks.getElementsByClassName("header__link");

for (let i = 0; i < rightsItem.length; i++) {
    rightsItem[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// copy text

document.getElementById("copy_discord").addEventListener('click', function () {
    navigator.clipboard.writeText("dorinka#5893");
});

document.getElementById("copy_mail").addEventListener('click', function () {
    navigator.clipboard.writeText("dashmenko@gmail.com");
});

// search
const form = document.querySelector("form");
form.addEventListener("submit", event => {
  const searchInput = document.querySelector("#search");
  if (!searchInput.value) {
    event.preventDefault();
  }
});