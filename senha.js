function gerarSenha() {
    const length = document.getElementById('senha-slider').value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById('senha-gerada').innerText = password;
}

function gerarSenhaSimples() {
    const length = document.getElementById('senha-slider').value;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        password += charset.charAt(Math.floor(Math.random() * n));
    }
    document.getElementById('senha-gerada').innerText = password;
}

function updateLengthDisplay() {
    const length = document.getElementById('senha-slider').value;
    document.getElementById('senha-length').innerText = length;
}
