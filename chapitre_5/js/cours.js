/* Affiche des informations sur un événement clavier
function infosClavier(e) {
    console.log("Evènement clavier : " + e.type + ", touche : " + e.keyCode);
}
function infosCLick(e){
        let button;

        if (e.button === 0)
                button = 'gauche';
        else if (e.button === 1)
                button = 'milieu';
        else if (e.button === 2)
                button = 'droite'
        else
                button = 'Erreur';
        return button;
*/

function info(e){
        let new_p;

        new_p = document.createElement('p');
        new_p.textContent = ""
        document.getElementById('para').appendChild(new_p);
}

document.getElementById('bouton').addEventListener('click', info);