function renderGallery() {
  // 1. Get the ID from the URL (e.g., template.html?id=c3)
  const urlParams = new URLSearchParams(window.location.search);
  const templeId = urlParams.get('id')

  const temple = templeData[templeId];
  if (!temple) {
    console.error("Data not found for ID:", templeId);
    return;
  }

  // 2. Update Header Text & Browser Tab Title
  document.title = temple.name;
  document.getElementById('temple-name').textContent = temple.name;
  document.getElementById('temple-address').textContent = temple.address;

  // 3. Update Description (supports single string or array of paragraphs)
  const descContainer = document.getElementById('temple-desc-container');
  if (descContainer && temple.desc) {
    const descContent = Array.isArray(temple.desc)
      ? temple.desc.map(p => `<p class="intro">${p}</p>`).join('')
      : `<p class="intro">${temple.desc}</p>`;
    descContainer.innerHTML = descContent;
  }

  // 4. Generate the Gallery HTML
  const container = document.getElementById('gallery-grid');
  if (container) {
    const html = temple.photos.map(photo => {
      // Special check for the .png file in folder 3
      const ext = (templeId === 'c3' && photo.id === 1) ? 'png' : 'jpg';

      return `
        <div class="photo">
          <h3>${photo.title}</h3>
          <a href="../HTML/${templeId}_photo/photo${photo.id}.html">
            <img src="../img/${temple.folder}/${photo.id}.${ext}" alt="${photo.title}">
          </a>
        </div>
      `;
    }).join('');

    container.innerHTML = html;
  }
}

window.onload = renderGallery;
