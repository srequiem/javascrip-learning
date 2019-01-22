
let h1 = document.body.childNodes[1];

function parentH1(node){
	if (!node)
		return (console.log('Invalid Node'));
	if (node.nodeType != document.ELEMENT_NODE)
		return (console.log('Invalid Node: Node must be an element node'))
	return (console.log(node.parentNode));

}

parentH1(h1);