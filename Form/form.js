// Adiciona um evento de clique ao botão com o ID 'btnCapturar'
document.getElementById('btnCapturar').addEventListener('click', function() {
    // Captura o valor do input de email e armazena na variável 'email'
    const email = document.getElementById('email').value; 
    // Captura o valor do input de nome e armazena na variável 'nome'
    const nome = document.getElementById('nome').value;

    // Verifica se o campo de email está vazio (apenas espaços em branco são considerados vazios)
    if (email.trim() === '') {
        alert('Por favor, preencha o campo de email.');
    } 
    // Verifica se o campo de nome está vazio
    if (nome.trim() === '') {
        alert('Por favor, digite seu nome');
    }
    // Se ambos os campos não estão vazios
    else {
        // Exibe o email capturado na página
        document.write(`Seu email é: ${email}`);
        // Exibe o nome capturado na página, com uma quebra de linha
        document.write(`<br>Seu nome é: ${nome}`);
    }
});