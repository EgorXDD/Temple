function renderGallery() {
  const urlParams = new URLSearchParams(window.location.search);
  const templeId = urlParams.get('id');
  const temple = templeData[templeId];

  document.getElementById('temple-name').textContent = temple.name;
  document.getElementById('temple-address').textContent = temple.address;



  const html = temple.photos.map(photo => `
        <div class="photo">
            <h3>${photo.title}</h3>
            <a href="../HTML/${templeId}_photo/photo${photo.id}.html">
                <img src="../img/${temple.folder}/${photo.id}.jpg"
                     alt="${photo.title}"
                     onerror="if(this.src.endsWith('.jpg')) this.src=this.src.replace('.jpg', '.png');">
            </a>
        </div>
    `).join('');

  document.getElementById('gallery-grid').innerHTML = html;
}

window.onload = renderGallery;
