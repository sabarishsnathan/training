var projectData=require("../../projects.json")
exports.getProjectById=(id,callback)=>
{
   var project={};
        for (let i=0; i<projectData.length; i++){
            if(projectData[i].project_id == id){
                project = projectData[i]
                break
            }
        }
        return callback(project)
    
}