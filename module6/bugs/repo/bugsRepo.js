import  mongodb from "../../config/mongodb.js"
var addBugs=(model,callback)=>
{
    mongodb.getCollection("bugs").insertOne({title: model.title,assignee:model.assignee,description:model.description,createTime:model.createTime,closeTime:model.closeTime})
    .then(()=>{
        return callback("success",null)
    },
    err=>{ console.log(err)
        return callback(null,err)}) 
    
}

var listBugs=(callback)=>
{
    mongodb.getCollection("bugs").find().toArray((err, result)=>{
        if(err){
           return callback(null,err)
        }else{
        let status
        const bugs = result.map( bug =>{
            console.log("bug ==> ", bug)
            const slaTime = bug.createTime + 259200000

            if( bug.closeTime.length == '' ) {
                status = "OPEN"
            } else {
                status = "CLOSE"
                bug["closeTimeStr"] = new Date(bug.closeTime).toLocaleString()
            }
            bug["createTimeStr"] = new Date(bug.createTime).toLocaleString()
            bug["slaTimeStr"] = new Date(slaTime).toLocaleString()
            bug["status"] = status
            return bug
        })
        return callback({data:bugs},null)
    }
    });
    
}

export default {addBugs,listBugs}