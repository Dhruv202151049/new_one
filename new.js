const fs = require("fs");
const path = require("path");

console.log(path.join(__dirname, "../EventMod"))

fs.mkdir("StramModule", (err) => (console.log("made")));
// C:\Users\Lenovo\OneDrive\Desktop\vs code\mern\new.js