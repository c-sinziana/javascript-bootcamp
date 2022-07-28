const fs = require("fs");
const path = require("path"); // modul nativ din nodejs
const sayHello = require("./my-module"); //path relativ

fs.writeFileSync("test.txt", "Hello from node");
const data = fs.readFileSync("test.txt", "utf-8");
console.log(data);

console.log(__dirname);
console.log(__filename);

const p = path.join(__dirname, "assets", "data.txt"); // concatenam folderul curent, care mai departe merge in assets si apoi in data.txt

console.log(p);

console.log(fs.readFileSync(p, "utf-8"));

sayHello();

const myJson = JSON.parse(fs.readFileSync("./assets/test.json"));
console.log(myJson["some-key"])
