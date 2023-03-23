const http = require('http');
const fs  = require("fs");

const server = http.createServer((req,res) => {
    console.log(req.url); 
    if(req.url == "/")
    {
        res.end("kuch nahi bas yuhi");
    }

    //instead of writing things in res.end u can 
    //specify things in res.write and the next line
    // could be res.end
    else if(req.url == "/About")
    {res.write("achcha ab about page khologe ");
    res.end("theek h bhai");}

    else if(req.url == "/api")
    {fs.readFile(`${__dirname}/UserAPI/userapi.json`, "utf-8", (err,data) => {
        // console.log(data);
        const normal = JSON.parse(data);
        console.log(normal);
        res.end(data);
    });
    }

    else if(req.url == "/contact")
    {res.end("achcha ab contact page khologe");}

    else
    {
        res.writeHead(404, {"Content-type": "text/html"});
        res.end("<h1> galat jagah aagaye bhai </h1>");
    }
 
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no. 8000");
});
