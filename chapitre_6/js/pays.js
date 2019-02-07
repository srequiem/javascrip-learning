// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

function parse(listePays){
    let pays = document.getElementById('pays');
    let suggestion = document.getElementById('suggestions');
    
    suggestion.innerHTML = "";
    pays.addEventListener('input', function(e){
        document.getElementById('suggestions').innerHTML = "";
        //let regex = new RegExp(e.target.value);
        listePays.forEach(function (paysC)
        {
            if (paysC.indexOf(e.target.value) === 0){
                let newSugest = document.createElement('div');
                newSugest.classList.add('suggestion');
                newSugest.textContent = paysC;
                newSugest.addEventListener('click', function(e){
                    pays.value = e.target.textContent;
                    suggestion.innerHTML = "";
                })
                suggestion.appendChild(newSugest);
            }
        });
    })
}


parse(listePays)