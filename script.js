document.querySelectorAll('.cell').forEach(cell => {
  cell.addEventListener('click', () => {
    alert(`Hiciste clic en la celda ${cell.textContent}`);
  });
});
