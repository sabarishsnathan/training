var employeeData=require("../../employees.json")
exports.getEmployeeById=(id,callback)=>
{
        var employee={};
        for (let i=0; i<employeeData.length; i++){
            if(employeeData[i].employee_id == id){
                employee = employeeData[i]
                break
            }
        }
        return callback(employee)
    
}