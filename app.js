const fs = require('fs')

fs.readFile( './subfolder/abc.txt','utf8',(err,data)=>{
    if (err){
        console.log('There is an error')
        return
    }
    f1 = data;
    console.log('This is the first')
    fs.readFile( './subfolder/xyz.txt','utf8',(err,data)=>{
        if (err){
            console.log('There is an error')
            return
        }
        f2 = data;
        console.log('This is the second')
        fs.writeFile('./subfolder/pqr.txt',`Here is the text ${f1} and ${f2}`,(err,data)=>{
            if (err){
                console.log('There is an error')
                return
            }
            console.log('This is the third')
        })
    });
})
console.log('This is the last one')