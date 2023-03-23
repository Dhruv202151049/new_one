const fs = require("fs");
const About_me = {
    name:"Dusky",
    age:"20",
    About:"mast h yaar sab kuch",
    Tum:"tum kaise ho"
    };

const jsondata = JSON.stringify(About_me);
// fs.writeFile("json1.json", jsondata, (err) => {
//     console.log("done!")
// })

fs.readFile("json1.json", "utf-8", (err,data) => {
    console.log(data)
    const orgDATA = JSON.parse(data);
    console.log(orgDATA);
})
