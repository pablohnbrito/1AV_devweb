function verificarLogin(username, password) {
  // Substitua estas variáveis com os valores reais
  const usuarioEsperado = "usuario";
  const senhaEsperada = "senha123";

  // Verifica se o username e a senha correspondem aos valores esperados
  if (username === usuarioEsperado && password === senhaEsperada) {
      return true; // Se for válido
  } else {
      return false; // Se for inválido
  }
}


document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Verifica o login
      if (verificarLogin(username, password)) {
          // Se for bem-sucedido, redireciona para home
          window.location.href = 'home.html';
      } else {
          alert('Usuário ou senha inválidos');
      }
  });
});
