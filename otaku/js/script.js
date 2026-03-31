function openPopup(imgElement) {
  var popup = document.getElementById("popup");
  var popupImg = document.getElementById("popup-img");
  var caption = document.getElementById("caption");

  popup.style.display = "block";
  popupImg.src = imgElement.src;
  caption.innerHTML = imgElement.alt;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
}
