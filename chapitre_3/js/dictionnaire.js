// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"

function createEl(name, id, text)
{
    if (name)
    {
        let elem = document.createElement(name);
        if (id)
            elem.id = id;
        if (text)
            elem.textContent = text;
        return (elem);
    }
    return (console.log('Name not valid'));
}

function create_dict(tab)
{
    if (!tab)
        return (console.log('Invalid tab'));
    let dict = createEl('dl', 'dict', null);
    document.getElementById('contenu').appendChild(dict);
    for (let i = 0; i < tab.length; i++)
    {
        let strong = createEl('strong', null, tab[i].terme);
        
        let dt = createEl('dt', tab[i].terme, null);
        document.getElementById('dict').appendChild(dt);
        document.getElementById(tab[i].terme).appendChild(strong);
        
        let dd = createEl('dd', null, tab[i].definition);
        document.getElementById(tab[i].terme).appendChild(dd);
        if (i != tab.length - 1)
        {let space = document.createElement('br');
        console.log(document.getElementById(tab[i].terme).appendChild(space));}
    }
}

create_dict(mots);    