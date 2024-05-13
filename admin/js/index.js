function openos() {
    window.open("newos.html");
}

   // Função para abrir o pop-up
   function openPopup() {
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}

// Função para fechar o pop-up
function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}