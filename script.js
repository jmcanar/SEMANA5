// Referencias a elementos
const imageUrlInput = document.getElementById('imageUrlInput');
const addImageButton = document.getElementById('addImageButton');
const deleteImageButton = document.getElementById('deleteImageButton');
const gallery = document.getElementById('gallery');

let selectedImage = null;

// Función para agregar imagen
function addImage() {
  const url = imageUrlInput.value.trim();
  if (!url) {
    alert('Por favor ingresa una URL válida.');
    return;
  }

  const img = document.createElement('img');
  img.src = url;
  img.alt = 'Imagen de la galería';

  // Animación opcional al agregar
  img.style.opacity = '0';
  setTimeout(() => (img.style.opacity = '1'), 50);

  img.addEventListener('click', () => selectImage(img));

  gallery.appendChild(img);
  imageUrlInput.value = '';
}

// Función para seleccionar imagen
function selectImage(img) {
  if (selectedImage) {
    selectedImage.classList.remove('selected');
  }
  selectedImage = img;
  selectedImage.classList.add('selected');
}

// Función para eliminar imagen seleccionada
function deleteSelectedImage() {
  if (!selectedImage) {
    alert('No hay imagen seleccionada.');
    return;
  }
