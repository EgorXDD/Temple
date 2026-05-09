function renderGallery() {
  const urlParams = new URLSearchParams(window.location.search);
  const templeId = urlParams.get('id');
  const temple = templeData[templeId];

  // Fill Header Info
  document.getElementById('temple-name').textContent = temple.name;
  document.getElementById('temple-address').textContent = temple.address;

  // Generate Gallery
  const html = temple.photos.map(photo => `
    <div class="photo">
      <h3>${photo.title}</h3>
      <a href="../HTML/${templeId}_photo/photo${photo.id}.html">
        <img src="../img/${temple.folder}/${photo.id}.jpg" alt="${photo.title}">
      </a>
    </div>
  `).join('');

  document.getElementById('gallery-grid').innerHTML = html;
}

window.onload = renderGallery;
