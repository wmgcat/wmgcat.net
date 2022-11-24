const viewImage = source => {
  let block = document.getElementById('preview');
  if (block) {
    block.style.display = 'flex';
    let img = block.querySelector('img');
    if (img) img.src = source; 
  }
};
const closePreview = () => {
  let preview = document.getElementById('preview');
  if (preview)
    preview.onclick = () => {
      preview.style.display = 'none';
    };
}

