function gerarSenha() {
    const length = document.getElementById('senha-slider').value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById('senha-gerada').innerText = password;
    document.getElementById('btn-copiar').style.display = 'block';
}

function gerarSenhaSimples() {
    const length = document.getElementById('senha-slider').value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById('senha-gerada').innerText = password;
    document.getElementById('btn-copiar').style.display = 'block';
}

function updateLengthDisplay() {
    const length = document.getElementById('senha-slider').value;
    document.getElementById('senha-length').innerText = length;
}

function copiarSenha() {
    const senhaGerada = document.getElementById('senha-gerada').innerText;
    navigator.clipboard.writeText(senhaGerada).then(function() {
        alert('Senha copiada para a área de transferência!');
    }, function(err) {
        console.error('Erro ao copiar a senha: ', err);
    });
}

function toggleTheme() {
    const body = document.body;
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');
}
