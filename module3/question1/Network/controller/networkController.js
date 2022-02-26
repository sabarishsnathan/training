var networkRepo=require("../repo/networkRepo")
exports.getEmployeeDetails=(req,res)=>
{
     var prodId=req.params.id;
     networkRepo.getEmployeeDetails(prodId,function(data)
     {
        if(JSON.stringify(data)=="{}")
         {
             return res.status(404).send("No data found")
         }else{
            return res.status(200).send(data)
         }
     })

}