const About_me = {
name:"Dusky",
age:"20",
About:"mast h yaar sab kuch",
Tum:"tum kaise ho"
};

//we will use the keyword "stringify 
//when we need to convert the object into
//JSON "

const jsondata = JSON.stringify(About_me);
console.log(jsondata);

//json ke aage dot loga k tum uska attribute call ni kar sakte
//wo sirf object ki property h

//to convert the json data into object data we use the parse keyword

const obectData = JSON.parse(jsondata);
console.log(obectData);