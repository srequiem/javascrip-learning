// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

function create_and_push(name, content, node, id)
{
    let newNode = document.createElement(name);
    if (newNode)
    {
        newNode.textContent = content;
        if (id)
            newNode.id = id;
        document.getElementById(node).appendChild(newNode);
    }
}

function buttonManager(button, answer, id)
{
    let p_answer;

    if (!button || !answer)
        return (console.log("Button or answer not found"));
    document.getElementById(button).addEventListener('click', function(){
        //Ou on cache le button puis on ajoute un noeud textuel au paragraphe
        document.getElementById(button).style.display = 'none';
        document.getElementById(id).appendChild(document.createTextNode(answer));
        document.getElementById(id).textContent.style.backgroundColor = 'red';
    });
}

function display(tab)
{
    let i;
    let idForAll;

    if (!tab)
        return (console.log('Invalid object'));
    for (i = 0; i < tab.length; i++)
    {
        idForAll = "question" + (i+1);
        create_and_push('p', null, 'contenu', idForAll);
        create_and_push('strong', "Question " + (i + 1) + " : ", idForAll, null);
        create_and_push('em', tab[i].enonce, idForAll, null);
        create_and_push('br','', idForAll);
        create_and_push('button', 'Afficher la reponse', idForAll, 'ButtonQuest' + (i+1));
        buttonManager('ButtonQuest' + (i+1), tab[i].reponse, idForAll);
        
    }

}

display(questions);