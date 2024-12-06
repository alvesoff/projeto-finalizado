document.querySelector('.form-cadastro').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const senha = document.querySelector('#senha').value;
    const nome = document.querySelector('#nome').value;

    // Simulação de salvamento de cadastro
    localStorage.setItem('email', email);
    localStorage.setItem('senha', senha);
    localStorage.setItem('usuario', nome);
    alert('Cadastro bem-sucedido!');
});
