const express = require("express")
const mongoose = require("mongoose")
const cors=require("cors")

const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")
const userController=require("./controller/user-controller")
const projectController=require("./controller/project-controller")
const project_teamcontroller=require("./controller/project_teamcontroller")
const status_controller=require("./controller/status-controller")

const project_module_controller=require("./controller/project-module-controller")
const task_controller=require("./controller/task-controller")
const user_taskcontroller=require("./controller//user-task-controller")
const prioritycontroller=require("./controller/priority-controller")

const app = express()
app.use(cors())
//middle ware 
app.use(express.json()) //mobile -> accept json data from request and set data into body 
app.use(express.urlencoded({extended:true})) //web --> accept url encoded data from request and set data into body  


//database 
mongoose.connect('mongodb://localhost:27017/ecom',function(err){
  if(err){
    console.log("db connection fai .. .. . ");
    console.log(err);
  }else{
    console.log("db Connected....");
  }
})

//urls 

app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})

          
app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup) 
app.post("/saveuser",sessionController.saveuser)


//role 
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleteRole)
app.put("/roles",roleController.updateRole)

//user
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)
app.post("/login",userController.login)


//project
app.post("/project",projectController.addProject)
app.get("/project",projectController.getAllProject)
app.delete("/project/:projectId",projectController.deleteProject)
app.put("/project",projectController.updateProject)
app.get("/project/:projectId",projectController.getoneProject)

//project_team
app.post("/project_team",project_teamcontroller.addteam)
app.get("/project_team",project_teamcontroller.getAllProjectTeam)
app.delete("/project_team/:project_teamId",project_teamcontroller.deleteProjectTeam)
//status
app.post("/status",status_controller.addstatus)
app.get("/status",status_controller.getAllstatus)
app.delete("/status/:statusId",status_controller.deletestatus)
app.put("/status",status_controller.updatestatus)
//module
app.post("/project_module",project_module_controller.addmodule)
//app.get("/project_module/:prjectId",project_module_controller.getOneemodule)
app.get("/project_module",project_module_controller.getAllmodule)
app.get("/project_module/:projectId",project_module_controller.getoneModule)
app.delete("/project_module/:moduleid",project_module_controller.deletemodule)
app.put("/project_module",project_module_controller.updatemodule)
//task
app.post("/task",task_controller.addtask)
app.get("/task",task_controller.getAlltask)
app.delete("/task/:taskid",task_controller.deletetask)
app.get("/updatetask/:taskid",task_controller.getoneTask)
app.put("/task",task_controller.updatetask)
app.get("/task/:moduleId",task_controller.getOneTaskbymodule)
//priority
app.post("/priority",prioritycontroller.addPriority)
app.get("/priority",prioritycontroller.getAllPriority)
app.delete("/priority",prioritycontroller.deletePriority)
app.put("/priority",prioritycontroller.updatePriority)
//user_taskcontroller
app.post("/user_task",user_taskcontroller.addUserTask)
app.get("/user_task",user_taskcontroller.getAllUserTask)
app.delete("/user_task/:UserTaskId",user_taskcontroller.deleteUserTask)
app.put("/user_task",user_taskcontroller.updateUserTask)


//server 

app.listen(4000,function(){
  console.log("server started on 4000");  
})