import  bugsRepo from "../repo/bugsRepo.js"
import BugsModel from "../model/bugsModel.js"
var addBugs=(req,res)=>
{
     var model=new BugsModel(req.body.title,req.body.assignee,req.body.description, Date.now(),"")
     bugsRepo.addBugs(model,function(data,err)
     {
         if(data)
         {
             return res.redirect("/bugs/")
         }else{
            return res.status(404).send("Some error occured")
         }
     })

}
var listBugs=(req,res)=>
{
     bugsRepo.listBugs(function(data,err)
     {
         if(data)
         {
            return res.render('index.ejs', data)
         }else{
            return res.status(404).send("Some error occured")
         }
     })

}

export default{
    addBugs,
    listBugs
}