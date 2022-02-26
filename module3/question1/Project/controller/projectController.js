var productRepo=require("../repo/projectRepo")
exports.getProjectDetails=(req,res)=>
{
     var prodId=req.params.id;
     productRepo.getProjectById(prodId,function(data)
     {
        if(JSON.stringify(data)=="{}")
         {
             return res.status(404).send("No data found")
         }else{
            return res.status(200).send(data)
         }
     })

}