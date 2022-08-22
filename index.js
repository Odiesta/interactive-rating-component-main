
var rateLength = document.querySelectorAll(".rate").length;
var ratingSelectedBefore = document.querySelector(".rate");
var rateValue = 5;

for (var i = 0; i < rateLength; i++) {
  document.querySelectorAll(".rate")[i].addEventListener("click", function() {
    if (ratingSelectedBefore.classList.contains('click-rate')) {
      ratingSelectedBefore.classList.remove('click-rate');
      ratingSelectedBefore.classList.add('default-li');
    }
    if (this.classList.contains('click-rate')) {
      this.classList.remove('click-rate');
      this.classList.add('default-li');
    } else {
      this.classList.remove("default-li");
      this.classList.add("click-rate");
      rateValue = this.innerHTML;
      ratingSelectedBefore = this;
    }
  });
}

function submit() {
  document.querySelectorAll("main")[0].classList.add("rating-container");
  document.querySelectorAll("main")[1].classList.remove("hide-container");
  document.querySelector(".thanks-img p").innerHTML = "You selected " + rateValue + " out of 5";
}
