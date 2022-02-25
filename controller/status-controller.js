const ProjectModel = require("../model/project-model")
const statusModel = require("../model/status-model")
const statusSchema = require("../model/status-model")


module.exports.addstatus = function(req,res){
    let statusname= req.body.statusname
    

    

    

    let status= new statusSchema({
        statusname:statusname,
        

    })
    status.save(function(err,success){
        if(err){
            res.json({
                msg:"something went wrong",
                status:-1,
                data:err
            })
            
        }else{
            res.json({
                msg:"status added",
                status:200,
                data:success

            })
                
            
        }
    })

}  
module.exports.getAllstatus =function(req,res){
    statusModel.find(function(err,success){
        if(err){
            res.json({
                msg:"data not found",
                status:-1,
                data:err
            })
        }else{
            res.json({
                msg:"data retrived ",
                status:200,
                data:req.body
            })
        }
    })
}

module.exports.updatestatus = function(req,res){
    let statusid = req.body.statusid 
    let statusname = req.body.statusname 

    

       statusModel.updateOne({_id:statusid},{statusname:statusname},function(err,data){
        if(err){
            res.json({
                msg:"Something went wrong!!!",
                status:-1,
                data:err
            })
        }
        else
        {
            res.json({
                msg:"updated...",
                status:200,
                data:req.body
            })
        }
    })
}
module.exports.deletestatus=function(req,res){
    let statusid= req.params.statusid


    statusModel.deleteOne({"_id":statusid},function(err,data){
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
                data:data
            })
        }
    })
}