const rating = document.querySelectorAll(".rating button");
var selectedRating = 0;

function addActiveBtnStyle(ratingBtn) {
  ratingBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      // remove all other btn active background color
      removeInactiveBtnStyle(rating);
      // add the css change the btn background color
      btn.classList.add("clicked");
      // console.log(selectedRating);
      selectedRating = btn.innerText;
    });
  });
}

function removeInactiveBtnStyle(ratingBtn) {
  ratingBtn.forEach((inactiveBtn) => {
    inactiveBtn.classList.remove("clicked");
  });
}

function submitRating() {
  var url = "success.html?rating=" + selectedRating;
  window.location.href = url;
  console.log(window.location.href);
}

addActiveBtnStyle(rating);

if (window.location.href.includes("success.html")) {
  var urlParams = new URLSearchParams(window.location.search);
  var ratingTag = document.querySelector(".selected-rating");
  ratingTag.innerText = urlParams.get("rating");
}
