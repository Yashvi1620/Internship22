
const res = require("express/lib/response");
const { status } = require("express/lib/response");
const RoleModel=require("../model/role-model")



module.exports.addRole = function (req,res){
    console.log(req.body.roleName);
    //db insert role 
    let role = new RoleModel({
        roleName:req.body.roleName
    })
    role.save(function(err,success){
        if (err){
            console.log(err);
            //sendMailToDev (err);
            res.json({msg:"SMW",status:-1,data:req.body})
        }else{

    res.json({msg:"role added",status:200,data:success})
     }
    })
}
module.exports.getAllRoles=function(req,res){
    RoleModel.find(function(err,roles){
        if(err){
            res.json({msg:"Something went wrong!!!",status:200,data:roles})
        }else{
            res.json({msg:"remove...",status:200,data:roles})
        
        }
    })

}
module.exports.deleteRole=function(req,res){
    let roleId=req.params.roleId
    RoleModel.deleteOne({"_id":roleId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"remove...",status:200,data:data})
        
        }
    })
}
module.exports.updateRole=function(req,res){
    let roleId=req.body.roleId
    let roleName=req.body.roleName
    RoleModel.updateOne({_id:roleId},{roleName:roleName},function(err,data){
        if (err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"updated...",status:200,data:data})
        }
    })
}
