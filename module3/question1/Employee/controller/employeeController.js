var empRepo=require("../repo/employeeRepo")
exports.getEmployeeDetails=(req,res)=>
{
     var empId=req.params.id;
     empRepo.getEmployeeById(empId,function(data)
     {
         if(JSON.stringify(data)=="{}")
         {
             return res.status(404).send("No data found")
         }else{
            return res.status(200).send(data)
         }
     })

}