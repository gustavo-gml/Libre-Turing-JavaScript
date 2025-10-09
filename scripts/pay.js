//-------------------"validação"---------------------------
    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('form-nome');
        const nomeError = document.getElementById('name-error');

        form.addEventListener('submit', function(event) {
            const clickedButton = event.submitter;

            nomeError.textContent = ''; // Limpa a mensagem de erro anterior

            // Se o botão de consulta específica foi clicado
            if (clickedButton.id === 'consulta-nome-livro') {
            // Sempre impede o envio do formulário
                event.preventDefault(); 
            
            // E sempre mostra a mensagem
                nomeError.textContent = 'Essa funcionalidade é exclusiva da versão Libre Turing ELITE.';
            }
        });
    });