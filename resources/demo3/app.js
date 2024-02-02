document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('drawing-canvas');
  const ctx = canvas.getContext('2d');
  const clearButton = document.getElementById('clear-canvas');
  const saveButton = document.getElementById('save-artwork');
  const colorPicker = document.getElementById('color-picker');
  let isDrawing = false;

  canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
  });

  canvas.addEventListener('mousemove', (e) => {
    if (isDrawing) {
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    }
  });

  canvas.addEventListener('mouseup', () => {
    isDrawing = false;
  });

  canvas.addEventListener('mouseout', () => {
    isDrawing = false;
  });

  colorPicker.addEventListener('change', (e) => {
    ctx.strokeStyle = e.target.value;
  });

  clearButton.addEventListener('click', () => {
    if (confirm('Are you sure you want to clear the canvas?')) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  });

  saveButton.addEventListener('click', () => {
    const artworkName = prompt('Enter a name for your artwork:');
    if (artworkName) {
      const dataURL = canvas.toDataURL('image/png');
      alert(`Artwork saved as "${artworkName}".`);
      // For demonstration purposes, we'll just log the data URL
      console.log(`Artwork Data URL: ${dataURL}`);
    }
  });

  // Keyboard events for shortcuts
  document.addEventListener('keydown', (e) => {
    // 'c' to clear the canvas
    if (e.key === 'c') {
      clearButton.click();
    }
    // 's' to save the artwork
    if (e.key === 's') {
      saveButton.click();
    }
  });
});
