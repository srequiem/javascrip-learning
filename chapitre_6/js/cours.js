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

function checkEmail(){
	let email = document.getElementById('courriel');
	if (!email)
		return (console.log("Email form not found"));
	email.addEventListener('keyup', function(e){
		let str = e.target.value;
		let regex = /.+@.+\..+/
		if (!regex.test(str))
			document.getElementById('aideCourriel').textContent = "Please enter a valid email.";
	})
	email.addEventListener('keydown', function(e){
		document.getElementById('aideCourriel').textContent = "";
	})
}
maisons.push({code: codeMaiso})

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
		return (false);
	return (false);
}
function checkPasswd(){
	var form = document.querySelector("form");
	form.addEventListener('submit', function(e){
		var pseudo = form.elements.pseudooo.value;
		var mdp = form.elements.mdp.value;
		if (checkAccount(pseudo, mdp))
			console.log('Valid passwd');
		else
			console.log('Invalid password or id');
		e.preventDefault(); // Annulation de l'envoi des données
	})
}

function good_size()
{	document.getElementById('mdp').addEventListener('focus', function (e){
		document.getElementById('mdp').addEventListener('input', function(e){
			let mdp = e.target.value;
			let	help = document.getElementById('aideMdp');

			if (mdp.length < 4)
				e.target.style.backgroundColor = '#FF6363';
			else if (mdp.length >= 4 && mdp.length < 8)
				e.target.style.backgroundColor = 'orange';
			else if (mdp.length >= 8)
				e.target.style.backgroundColor = '#7DD581';
		})
	})
	document.getElementById('mdp').addEventListener('blur', function (e){
		e.target.style.backgroundColor = ''
	})
}

checkPasswd();
good_size();
checkEmail();