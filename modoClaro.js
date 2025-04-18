const alternar = document.getElementById('alternar-tema');

alternar.addEventListener('click', () => {
  document.body.classList.toggle('modoClaro');
  

  alternar.innerHTML = document.body.classList.contains('modoClaro') 
  ? '<i class="fa-solid fa-moon"></i>' 
  : '<i class="fa-solid fa-sun"></i>';

});
















//   localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
// });

// // (Opcional) Manter tema após recarregar a página
// window.addEventListener('DOMContentLoaded', () => {
//   const savedTheme = localStorage.getItem('theme');
//   if (savedTheme === 'dark') {
//     document.body.classList.add('dark-mode');
//     toggle.textContent = '☀️';
//   }
// 