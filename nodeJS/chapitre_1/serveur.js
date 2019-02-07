/*let face = [];
var img = new Image();
img.id = 'moi';
img.src = '/sgoinfre/photos_students/2018/srequiem.JPG';
face.push(img);


document.getElementById('container').appendChild(face[0]);
let res = document.getElementById('moi');
res.style.width = "390px";
res.style.height = "320px";
*/


var http = require('http');
var server = http.createServer(function(req, res) {
    var fs = require('fs');
    
    if (process.argv.length <= 2) {
        console.log("Usage: " + __filename + "Path/of/your.choise");
        process.exit(-1);
    }
    
    var path = process.argv[2];
    
    fs.readdir(path, function(err, items) {
        console.log(items);
    
        for (var i=0; i<items.length; i++) {
            console.log(items[i]);
        }
    });

        res.writeHead(200);
    res.end('Salut tout le monde !');
    });
server.listen(8080);