const h2Info = {

	h2: document.getElementsByTagName('h2'),
	h2Texte(){
		console.log(this.h2);
	},
	h2Size(){
		console.log(this.h2.length)
	}
}

h2Info.h2Texte();
h2Info.h2Size();