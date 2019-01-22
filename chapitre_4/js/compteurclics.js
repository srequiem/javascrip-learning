function clic(){
	count++;
	document.getElementById('compteurClics').textContent = count;
}


function gererTout(){
	document.getElementById('clic').addEventListener("click", clic);
	document.getElementById('desactiver').addEventListener("click", function(e){
		document.getElementById('clic').removeEventListener("click", clic);
		document.getElementById('compteurClics').textContent = 0;
	});
	document.addEventListener('keypress', function(e)
	{
		if (String.fromCharCode(e.charCode) === 'r')
			document.getElementById('clic').addEventListener('click', function(e)
			{
				count = 0;
				document.getElementById('clic').addEventListener("click", clic);
				document.querySelector('p').style.backgroundColor = 'red';
			});
	});
}
count = 0;
gererTout();