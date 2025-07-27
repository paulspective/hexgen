const input = document.getElementById('colorInput');
const box = document.getElementById('colorBox');
const rgb = document.getElementById('rgbVal');

input.addEventListener('input', () => {
  const color = input.value.trim();

  if (/^#[0-9A-Fa-f]{6}$/.test(color)) {
    const hex = color.slice(1);
    const rHex = hex.slice(0, 2);
    const gHex = hex.slice(2, 4);
    const bHex = hex.slice(4, 6);

    const r = parseInt(rHex, 16);
    const g = parseInt(gHex, 16);
    const b = parseInt(bHex, 16);

    rgb.textContent = `rgb(${r}, ${g}, ${b})`;
    box.style.backgroundColor = color;
    input.style.border = '1px solid #ccc';
  } else {
    input.style.border = '2px solid #f00';
    rgb.textContent = '';
  }
});