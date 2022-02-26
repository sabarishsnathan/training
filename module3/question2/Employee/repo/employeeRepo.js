const request = require('request');
exports.getEmployeeById=(callback)=>
{
    
    getEmployeeDetailsFromServer().then((data,err)=>{
        if(data)
        {
            return callback(JSON.parse(data))
        }else{
            return callback([])
        }
    })
}

function getEmployeeDetailsFromServer()
{
    var options = {
        url: "http://5c055de56b84ee00137d25a0.mockapi.io/api/v1/employees",
        headers: {
            'User-Agent': 'request'
        }
    };
    // Return new promise 
    return new Promise( (resolve, reject) => {
        // Do async job
        request.get(options, (err, resp, body) => {
            if (err) {
                reject(err);
            } else {
                resolve(body);
            }
        })
    })
}