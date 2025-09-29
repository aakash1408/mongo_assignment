const path = require('path');

console.log(path.basename('D:\\reactpro1\\NodeWS\\hello.js'))
console.log(path.dirname('D:\reactpro1\NodeWS\hello.js'))
console.log(path.extname('D:\reactpro1\NodeWS\hello.js'))
console.log(path.join(__dirname, 'test.txt'))
console.log(path.sep)
console.log(path.delimiter)
console.log(path.isAbsolute('D:\\reactpro1\\NodeWS\\hello.js'))

const path1 = path.relative("d/folder/viren/website","website/demos/files");
console.log('>>>>>>>   ' + path1);

const path2 = path.relative("viren/website","viren/website");
console.log('???????   ' + path2);






