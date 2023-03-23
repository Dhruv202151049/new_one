const fs =  require("fs");
const http = require("http");
const server =  http.createServer();

server.on('request', (req, res) => 
{
    //this is the one way to display or read the data
    // var fs =  require("fs");
    // fs.readFile("input.txt", (err,data) =>
    // {
    //     if(err) return console.error(err);
    //     res.end(data);
    // });

    //the next way to stream your data live
    //  const rstream = fs.createReadStream("input.txt");
    //  rstream.on("data", (chunk) => {
    //     res.write(chunk);
    //  });
    //  rstream.on("end",() =>
    //  {
    //     res.end();
    //  }); 
    //  rstream.on("error",() =>
    //  {
    //     res.end("file not found");
    //  }); 

    //3rd way 
    console.log(req);
    const rstream = fs.createReadStream("input.txt");
    rstream.pipe(res);

});

server.listen(8000, "127.0.0.1");