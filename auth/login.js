document.querySelector('.form-login').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;

    // Simulação de verificação de login
    const storedEmail = localStorage.getItem('email');
    const storedSenha = localStorage.getItem('senha');
    const storedNome = localStorage.getItem('usuario');

    if (email === storedEmail && senha === storedSenha) {
        alert('Login bem-sucedido!');
        atualizarBotaoLogin(storedNome);
    } else {
        alert('E-mail ou senha incorretos.');
    }
});

function atualizarBotaoLogin(nome) {
    if (nome) {
        const botaoLogin = document.querySelector('#open-login-popup');
        botaoLogin.textContent = nome;
        botaoLogin.classList.remove('btn-login');
        botaoLogin.classList.add('btn-usuario');
        botaoLogin.disabled = true; // Desabilita o botão
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const nome = localStorage.getItem('usuario');
    atualizarBotaoLogin(nome);
});
