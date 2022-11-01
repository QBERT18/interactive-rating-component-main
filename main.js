var ratingList = document.getElementById("rating-card-list");
var ratingCard = document.getElementById("rating-card");
var submitCard = document.getElementById("submit-card");
var submitCardRatingRate = document.getElementById("submit-card-rating-rate");
for (const child of ratingList.children) {
  child.addEventListener("click", function () {
    removeClass();
    child.classList.add("selected");
  });
}
function removeClass() {
  for (const child of ratingList.children) {
    child.classList.remove("selected");
  }
}
function submitRate() {
  var selectedRate = document.querySelector(".selected");
  if (selectedRate) {
    var submitCardRatingRate = document.getElementById(
      "submit-card-rating-rate"
    );
    submitCardRatingRate.innerHTML = selectedRate.innerHTML;
    ratingCard.classList.toggle("hidden");
    submitCard.classList.toggle("hidden");
  }
}
