const fetch = require("node-fetch");
exports.getEmployeeDetails= async (id,callback)=>
{

    try {
        const response = await fetch("http://localhost:3000/employee/" + id);
        const employee = await response.json();
        
        const response1 = await fetch("http://localhost:3000/project/" + employee.project_id);
        const project = await response1.json();
        employee.projectName=project.projectName;
        employee.projectDecription=project.description;
    
       return callback(employee)
      } catch (error) {
        console.log("Error: ",error);
        return callback({})
      }
    
}