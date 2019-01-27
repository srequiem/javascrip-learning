const key=[
	{
		pseudo: 'sacha',
		mdp: '0429'
	},
	{
		pseudo: 'dimini',
		mdp: 'fdp'
	}
];

function checkEmail()
{
	var email = document.getElementById('courriel');
	var	regex = /.+@.+\..+/;
	email.addEventListener('input', function(e){
		if (!regex.test(e.target.value)){
			document.getElementById('aideCourriel').textContent = "Invalid adress";
			document.getElementById('aideCourriel').style.color = 'rgb(206,38,110)';
			document.getElementById('courriel').setAttribute('placeholder', '')
			document.getElementById('courriel').style.backgroundColor = 'rgb(206,38,110)';
		}
		else{
			document.getElementById('aideCourriel').textContent = "";
			document.getElementById('courriel').style.backgroundColor = 'rgb(0, 195, 20)';
		}
		email.addEventListener('blur', function(e){
		document.getElementById('courriel').style.backgroundColor = 'rgb(255, 255, 255)';
		})
	})
	
}

function checkAccount(name, passwd)
{
	let i;
	let check;

	check = 0;
	i = -1;
	while (++i < key.length)
	{
		if (name === key[i].pseudo)
		{
			check = 1;
			if (passwd === key[i].mdp)
				return (true);
		}
	}
	if (check != 1)
		return (console.log('Ce pseudo n\'existe pas'));
	return (false);
}

function checkALl(){
	var form = document.querySelector("form");
	form.addEventListener('submit', function(e){
		var pseudo = form.elements.pseudooo.value;
		var mdp = form.elements.mdp.value;
		console.log(pseudo);
		console.log(mdp);
		if (checkAccount(pseudo, mdp))
			console.log('Valid passwd');
		else
		{
			console.log('Invalid passwd');
			e.preventDefault(); // Annulation de l'envoi des données
		}
	})
} 

function checkGoodMdp(){
		document.getElementById('mdp').addEventListener('input', function(e){
			let mdp = e.target.value;
			let	help = document.getElementById('aideMdp');
			var	regex1 = /@/;
			var	regex2 = /[0-9]+/;
			var regex3 = /[a-z]+/;
			var	regex4 = /[A-Z]+/;
			var res = (regex1.test(mdp) && regex2.test(mdp) && regex3.test(mdp) && regex4.test(mdp));
			if (mdp.length < 4)
				e.target.style.backgroundColor = '#FF6363';
			else if (mdp.length >= 4 && mdp.length < 8 && !res)
				e.target.style.backgroundColor = 'orange';
			else if (mdp.length >= 5 && res)
				e.target.style.backgroundColor = '#7DD581';
		})
	document.getElementById('mdp').addEventListener('blur', function (e){
		e.target.style.backgroundColor = ''
	})
}
checkEmail();
checkALl();
checkGoodMdp();