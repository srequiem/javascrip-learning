// Gestion du clic sur le lien interdit
document.getElementById("interdit").addEventListener("click", function (e) {
    alert("Continuez plutôt à lire le cours ;)");
    e.preventDefault(); // Annulation de la navigation vers la cible du lien !!!!!!!!!!!
});

