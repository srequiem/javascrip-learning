var compteurElt = document.getElementById("compteur");

// Diminue le compteur jusqu'à 0
function diminuerCompteur() {
    // Conversion en nombre du texte du compteur
    var compteur = Number(compteurElt.textContent);
<<<<<<< HEAD
    if (compteur >= 1) {
        compteurElt.textContent = compteur - 1;
    } else {
=======
    if (compteur > 1) {
        compteurElt.textContent = compteur - 1;
    }
    else{
>>>>>>> 0725d388bab1fe1e3323135c444e0902386c77fc
        // Annule l'exécution répétée
        clearInterval(intervalId);
        // Modifie le titre de la page
        var titre = document.getElementById("titre");
        titre.textContent = "BOUM !!!";
<<<<<<< HEAD
=======
        // Modification du titre au bout de 2 secondes
        setTimeout(function () {
            titre.textContent = "Tout est cassé :(";
        }, 2000);
>>>>>>> 0725d388bab1fe1e3323135c444e0902386c77fc
    }
}

// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
<<<<<<< HEAD
let intervalId = setInterval(diminuerCompteur, 1000);
=======
var intervalId = setInterval(diminuerCompteur, 1000);
>>>>>>> 0725d388bab1fe1e3323135c444e0902386c77fc
