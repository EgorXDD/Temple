function renderGallery() {
  const urlParams = new URLSearchParams(window.location.search);
  const templeId = urlParams.get('id');


  if (typeof templeData === 'undefined' || !templeData[templeId]) return;

  const temple = templeData[templeId];


  document.getElementById('temple-name').textContent = temple.name;
  document.getElementById('temple-address').textContent = temple.address;


  const descContainer = document.getElementById('temple-desc-container');
  if (descContainer && temple.desc) {
    if (Array.isArray(temple.desc)) {
      descContainer.innerHTML = temple.desc.map(p => `<p>${p}</p>`).join('');
    } else {
      descContainer.innerHTML = `<p>${temple.desc}</p>`;
    }
  }


  const encodedAddress = encodeURIComponent(temple.name + " " + temple.address);
  const mapUrl = `https://maps.google.com/maps?q=${encodedAddress}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  const mapElement = document.getElementById('temple-map');
  if (mapElement) {
    mapElement.src = mapUrl;
  }


  const html = temple.photos.map(photo => {
    // Path to the image folder
    const path = `../img/${temple.folder}/${photo.id}`;


    return `
      <div class="photo">
        <h3>${photo.title}</h3>
        <a href="${templeId}_photo/photo${photo.id}.html">
          <img src="${path}.jpg" onerror="this.onerror=null; this.src='${path}.png';">
        </a>
      </div>
    `;
  }).join('');

  document.getElementById('gallery-grid').innerHTML = html;
}

window.onload = renderGallery;
