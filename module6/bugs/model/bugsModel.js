class Bugs{
    title="";assignee="";description="";createTime="";closeTime="";
    constructor(title,assignee,description,createTime,closeTime)
    {
         this.title= title,
         this.assignee=assignee,
         this.description =description,
         this.createTime= createTime,
         this.closeTime=closeTime
    }
}

export { Bugs as default}