function validaCPF(cpf) {
    // 1. Limpa a formatação (pontos e hífen)
    const cpfLimpo = cpf.replace(/[^\d]/g, '');

    // 2. Verifica se tem 11 dígitos
    if (cpfLimpo.length !== 11) {
        return false;
    }

    // 3. Verifica se todos os dígitos são iguais (ex: 111.111.111-11)
    if (/^(\d)\1{10}$/.test(cpfLimpo)) {
        return false;
    }

    // 4. Validação dos dígitos verificadores
    let soma = 0;
    let resto;

    // --- Validação do primeiro dígito verificador ---
    for (let i = 1; i <= 9; i++) {
        soma += parseInt(cpfLimpo.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }

    if (resto !== parseInt(cpfLimpo.substring(9, 10))) {
        return false;
    }

    // --- Validação do segundo dígito verificador ---
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma += parseInt(cpfLimpo.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;

    if ((resto === 10) || (resto === 11)) {
        resto = 0;
    }

    if (resto !== parseInt(cpfLimpo.substring(10, 11))) {
        return false;
    }

    // Se passou por todas as verificações, o CPF é válido
    return true;
}
            const formLogin = document.getElementById('form-login');
            const cpfInput = document.getElementById('cpf');
            const cpfError = document.getElementById('cpf-error');

            formLogin.addEventListener('submit', function(event) {
                // Pega o valor do CPF digitado
                const cpfValue = cpfInput.value;

                // Usa a função para validar
                if (!validaCPF(cpfValue)) {
                    // Se o CPF for inválido:
                    // 1. Impede o envio do formulário
                    event.preventDefault();

                    // 2. Mostra uma mensagem de erro para o usuário
                    cpfError.textContent = 'Meu excelentíssimo usuário, peço encarecidamente que não mintas para mim novamente. Por favor, digite um cpf que seja possível de constatar sua existência ';
                    
                    // 3. (Opcional) Adiciona um estilo de erro ao campo
                    cpfInput.style.borderColor = 'red';
                } else {
                    // Se o CPF for válido, limpa qualquer mensagem de erro anterior
                    console.log("Muito obrigado, agradeço sua inestimável honestidade. Sei que você não será capaz de ver essa mensagem, mas saiba que o tempo que passamos juntos de extremo proveito.")
                    cpfError.textContent = '';
                    cpfInput.style.borderColor = ''; // Volta ao normal
                    
                    
                }
            });