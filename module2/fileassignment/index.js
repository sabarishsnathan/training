
var fs = require('fs')


function readFileDataBase(callback)
{
    fs.readFile("filedb.json", 'utf-8', function (err, content) {
        if (err)
        {
          return callback(err,null)
        }else{
            console.log(content)
            callback(null, JSON.parse(content))
        }
         
        
    })
}


function handler()
{   
    try{
        const prompt = require("prompt-sync")({ sigint: true });
        const user_input = prompt("Enter the filename: ");
        readFileDataBase(function(err,content)
        {
            if(content.includes(user_input))
            {
                console.log(user_input, "******** Oops, existing, try again !")
            }else{
                content.push(user_input)
                fs.writeFile(user_input,'You are awesome', function(err){
                    if(err)
                    {
                        throw err
                    }else{
                        fs.writeFile("filedb.json", JSON.stringify(content), function(err){
                            if(err) 
                            {
                                throw err;
                            }else{
                                console.log("File added successfully")
                            }
                            
                        }) 
                    } ;
                })
                
            }
        
        
        
       
    });
}catch(err)
{
    console.log('Error:'+err)
}
}
handler();

