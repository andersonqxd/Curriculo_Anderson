const botaoTema = document.getElementById('toggle-tema');
botaoTema.addEventListener('click', () => {
  document.body.classList.toggle('tema-escuro');
  const temaAtual = document.body.classList.contains('tema-escuro') ? 'escuro' : 'claro';
  botaoTema.textContent = `Tema ${temaAtual}`;
});
