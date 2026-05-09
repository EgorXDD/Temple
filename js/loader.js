function renderGallery() {
  // 1. Get ID from URL (e.g., category3.html?id=c3)
  const urlParams = new URLSearchParams(window.location.search);
  const templeId = urlParams.get('id') || 'c2'; // Default to c2 if no ID

  const temple = templeData[templeId];
  if (!temple) return;

  // 2. Update Header info
  if(document.getElementById('page-title')) document.getElementById('page-title').textContent = temple.name;
  document.getElementById('temple-name').textContent = temple.name;
  document.getElementById('temple-address').textContent = temple.address;

  const container = document.getElementById('gallery-grid');

  // 3. Generate Photo HTML
  const html = temple.photos.map(photo => {
    // Logic to handle that one .png in folder 3
    const extension = (templeId === 'c3' && photo.id === 1) ? 'png' : 'jpg';

    return `
      <div class="photo">
        <h3>${photo.title}</h3>
        <a href="../HTML/${templeId}_photo/photo${photo.id}.html">
          <img src="../img/${temple.folder}/${photo.id}.${extension}" alt="${photo.title}">
        </a>
      </div>
    `;
  }).join('');

  container.innerHTML = html;
}

window.onload = renderGallery;
