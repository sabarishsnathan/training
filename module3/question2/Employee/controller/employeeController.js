var empRepo=require("../repo/employeeRepo")
exports.getEmployeeDetails=(req,res)=>
{
     empRepo.getEmployeeById(function(result)
     {
        res.render('main',{result,title:'Employees List'})
     })

}