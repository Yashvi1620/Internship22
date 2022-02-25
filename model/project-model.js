const mongoose=require("mongoose")
const ProjectSchema=new mongoose.Schema({
    
    projectName:{
        type:String,
        require:true
    },
    description:{
        type:String
        
    },
    startDate:{
        type:String,
        require:true
    },
    endDate:{
        type:String,
        require:true
    },
    
    estimatedHours:{
        type:Number
    },
    technology:{
        type:String
        
    },
    status:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"status"
    }


})
const ProjectModel=mongoose.model("Project",ProjectSchema)
module.exports=ProjectModel
    