function openPopup(imgElement) {
  const popup = document.getElementById("popup");

  popup.style.display = "block";
  document.body.style.overflow = "hidden";

  document.getElementById("popup-img").src = imgElement.src;
  document.getElementById("caption").innerHTML = imgElement.alt;
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.body.style.overflow = "auto";
}
