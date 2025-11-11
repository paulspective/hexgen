const hexInput = document.getElementById('hexInput');
const colorPreview = document.getElementById('colorPreview');
const rgbValue = document.getElementById('rgbValue');
const refreshBtn = document.getElementById('refreshBtn');
const copyBtn = document.getElementById('copyBtn');
const copyRgbBtn = document.getElementById('copyRgbBtn');

// HEX to RGB converter
function hexToRgb(hex) {
  const cleanHex = hex.replace('#', '');
  const r = parseInt(cleanHex.slice(0, 2), 16);
  const g = parseInt(cleanHex.slice(2, 4), 16);
  const b = parseInt(cleanHex.slice(4, 6), 16);
  return `rgb(${r}, ${g}, ${b})`;
}

// HEX validation
function isValidHex(hex) {
  return /^#([A-Fa-f0-9]{6})$/.test(hex);
}

// Update UI
function updateColor(hex) {
  if (!isValidHex(hex)) {
    hexInput.style.borderColor = '#e74c3c';
    return;
  }

  hexInput.style.borderColor = '#e0e0e0';
  const rgb = hexToRgb(hex);
  colorPreview.style.backgroundColor = hex;
  rgbValue.textContent = rgb;
}

// Input event listener
hexInput.addEventListener('input', e => {
  const value = e.target.value.trim();
  if (value.length === 7) updateColor(value);
});

// Random hex generator
function getRandomHex() {
  const random = Math.floor(Math.random() * 0xffffff); // any value between 0–16777215
  const hex = `#${random.toString(16).padStart(6, '0')}`;
  return hex.toUpperCase();
}

// Refresh click handler
refreshBtn.addEventListener('click', () => {
  const randomHex = getRandomHex();
  hexInput.value = randomHex;
  updateColor(randomHex);
});

// Copy to clipboard handlers
copyBtn.addEventListener('click', () => {
  const hexValue = hexInput.value.trim();
  navigator.clipboard.writeText(hexValue).then(() => {
    copyBtn.textContent = 'done';
    setTimeout(() => copyBtn.textContent = 'content_copy', 1000);
  });
});

copyRgbBtn.addEventListener('click', () => {
  const rgbText = rgbValue.textContent.trim();
  navigator.clipboard.writeText(rgbText).then(() => {
    copyRgbBtn.textContent = 'done';
    setTimeout(() => copyRgbBtn.textContent = 'content_copy', 1000);
  });
});


