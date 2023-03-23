//iss file ko domain file maan lo jahan se cheezein export karni hoti h 
// so  pehle function define karlo jo bhi karnw hai
//then last m "module.exports.fn_name= fn_name"
// aisa kar dene aur ye multiple functions k liye bhi kar skte hain

const add = (a,b) => {
    return a+b;
}

const sub = (a,b) => {
    return a-b;
}

// module.exports.add = add;
// module.exports.sub = sub;
//ab ye upar wali kahani likhne k bajaye
//sirf itna likhdo ki 

module.exports = {add, sub};