const Dados = document.querySelectorAll('.dados');

Dados.forEach(group => {
  const input = group.querySelector('input');
  const button = group.querySelector('button');

  button.addEventListener('click', () => {
    input.disabled = !input.disabled; // Toggle disabled state
  });
});
