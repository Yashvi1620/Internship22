const { request } = require("express")
const TaskModel=require("../model/task-model")
const taskSchema=require("../model/task-model")
module.exports.addtask=function(req,res){
    let taskName=req.body.taskName
    let description=req.body.description
    let startDate=req.body.startDate
    let endDate=req.body.endDate
    let totalHours=req.body.totalHours
    let utilizedHours=req.body.utilizedHours
    let project=req.body.project
    let status=req.body.status
    let module=req.body.module

    let task=new taskSchema({
        taskName:taskName,
        description:description,
        startDate:startDate,
        endDate:endDate,
        totalHours:totalHours,
        utilizedHours:utilizedHours,
        project:project,
        status:status,
        module:module

    })
    task.save(function(err,success){
        if(err){
            res.json({
                msg:"something went wrong",
                status:-1,
                data:err
            })
        }else{
            res.json({
                msg:"task added",
                status:200,
                data:success
            })
        }
    })
}
module.exports.getAlltask=function(req,res){
    
    
    TaskModel.find({project:req.query.projectid}).populate("project").populate("module").populate("status").exec(function(err,success){

        if(err){
            res.json({
                msg:"something went wrong",
                status:-1,
                data:err
            })
        }else{
            res.json({
                msg:"task retrieved",
                status:200,
                data:success
           })
       }
    
    })
}
module.exports.updatetask=function(req,res){
    let taskid=req.body.taskid
    let taskName=req.body.taskName
    let project=req.body.project
    let estimatedHours=req.body.estimatedHours
    let startDate=req.body.startDate
    let endDate=req.body.endDate
    let utilizedHours=req.body.utilizedHours
    let status=req.body.status
    let module=req.body.module
    TaskModel.updateOne({_id:taskid},{taskName:taskName,project:project,estimatedHours:estimatedHours,startDate:startDate,endDate:endDate,utilizedHours:utilizedHours,status:status,module:module},function(err,data){
        if(err){
            res.json({
                msg:"Something went wrong!!",
                status:-1,
                data:err
            })
        }else{
            res.json({
                msg:"updated..",
                status:200,
                data:req.body
            })
        }
    })
}
module.exports.deletetask=function(req,res)
{
    let taskid=req.query.taskid
    TaskModel.deleteOne({"_id":taskid},function(err,success){
        if(err){
            res.json({
                msg:"not deleted",
                status:-1,
                data:err
            })
        }else{
            res.json({
                msg:"data deleted",
                status:200,
                data:success
            })
        }
    })
}    