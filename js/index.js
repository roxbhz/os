function acessar() {
    if (document.getElementById('email-login').value == 'admin@admin.com' || document.getElementById('password-login') == 'admin') {
        window.open("admin", target = "_self")
    }
    else {
        alert("Email falhou");
    }
}
