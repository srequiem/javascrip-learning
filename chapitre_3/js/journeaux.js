// Liste des journaux
var journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];
let tmp = document.getElementById('contenu');
// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"

function createLink(content, ref){
    if (!content || !ref)
        return (console.log("createLink: Invalid content or ref"))
    let link = document.createElement("a");
    if (link)
    {
        link.href = content;
        link.id   = content;
        link.textContent = content;
        document.getElementById("contenu").appendChild(link);
    }
    return (true);
}

function ParseAndPush(tab)
{
    if (!tab)
        return (console.log("error"));
    for (let i = 0; i < tab.length; i++)
    {
        if (createLink(tab[i], tab[i]))
        {
            let space = document.createElement("br");
            document.getElementById(tab[i]).appendChild(space);
        }
    }
}
//document.getElementById("para").appendChild(aa);
ParseAndPush(journaux);
console.log(document.getElementById('contenu'));