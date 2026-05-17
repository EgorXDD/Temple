function searchPhotos() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const resultsGrid = document.getElementById('search-results-grid');

  if (input.trim() === "") {
    resultsGrid.style.display = "none";
    resultsGrid.innerHTML = "";
    return;
  }

  resultsGrid.innerHTML = "";
  let foundMatch = false;

  for (const templeId in templeData) {
    const temple = templeData[templeId];
    temple.photos.forEach(photo => {
      if (photo.title.toLowerCase().includes(input)) {
        foundMatch = true;

        const imgPath = `img/${temple.folder}/${photo.id}`;

        const photoCard = `
          <div class="photo">
            <span style="font-size: 0.8rem; color: #888;">${temple.name}</span>
            <h3>${photo.title}</h3>
            <a href="HTML/template.html?id=${templeId}">
              <img src="${imgPath}.jpg" onerror="this.onerror=null; this.src='${imgPath}.png';">
            </a>
          </div>
        `;
        resultsGrid.innerHTML += photoCard;
      }
    });
  }
  resultsGrid.style.display = foundMatch ? "grid" : "none";
}


