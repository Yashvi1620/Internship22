import logo from "./logo.svg";
import "./App.css";
import "./Components/css/app.css";
import "./Components/css/app.css.map";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "./Components/Dashboard";
import { Project } from "./Components/Project";
import { ProjectModule } from "./Components/ProjectModule";
import { Roles } from "./Components/Roles";

import { UserTask } from "./Components/UserTask";
import { User } from "./Components/User";
import { Priority } from "./Components/Priority";
import { Status } from "./Components/Status";
import { Form } from "./Components/Form";
import { ProjectTeam } from "./Components/ProjectTeam";
import { UpdateProject } from "./Components/UpdateProject";
import { ModuleForm } from "./Components/ModuleForm";
import { UpdateProjectModule } from "./Components/UpdateProjectModule";
import { Tasks } from "./Components/Tasks";
import { TaskForm } from "./Components/TaskForm";
import { UpdateTask } from "./Components/UpdateTask";
import { LoginForm } from "./Components/LoginForm";
import UserPage from "./Components/UserPage";
import AllProjectModule from "./Components/AllProjectModule";
import {RoleForm} from './Components/RoleForm';
import DevloperDashboard from "./Components/DevloperDashboard";
import DeveloperTask from "./Components/DeveloperTask";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/devloperDashboard" element={<DevloperDashboard />}></Route>
        <Route path="/developerTask" element={<DeveloperTask />}></Route>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/Project" element={<Project />}></Route>
        <Route path="/Priority" element={<Priority />}></Route>
        <Route path="/ProjectModule/:id" element={<ProjectModule />}></Route>
        <Route path="/AllProjectModule" element={<AllProjectModule />}></Route>
        <Route path="/Project-Team" element={<ProjectTeam />}></Route>
        <Route path="/Roles" element={<Roles />}></Route>
        <Route path="/Status" element={<Status />}></Route>
        <Route path="/Tasks" element={<Tasks />}></Route>
        <Route path="/User" element={<UserPage />}></Route>
        <Route path="/User-Task" element={<UserTask />}></Route>
        <Route path="/Form" element={<Form />}></Route>
        <Route path="/Dashboard/Update/:id" element={<UpdateProject />}></Route>
        <Route path="/ModuleForm/:moduleId" element={<ModuleForm />}></Route>
        <Route
          path="/UpdateProjectModule/:updateModuleId"
          element={<UpdateProjectModule />}
        ></Route>
        <Route path="/Tasks/:id/User/:id" element={<User />}></Route>
        <Route path="/TaskForm" element={<TaskForm />}></Route>
        <Route path="/RoleForm" element={<RoleForm/>}></Route>
        <Route
          path="/UpdateTask/:updatetaskId"
          element={<UpdateTask />}
        ></Route>
        <Route path="/LoginForm" element={<LoginForm />}></Route>
      </Routes>
    </div>
  );
}

export default App;
