const res = require("express/lib/response");
const moduleModel = require("../model/project-module-model");
const project_moduleSchema = require("../model/project-module-model");

module.exports.addmodule = function (req, res) {
  let modulename = req.body.modulename;
  let project = req.body.project;
  let estimatedHours = req.body.estimatedHours;
  let startDate = req.body.startDate;
  let endDate = req.body.endDate;
  let utilizedHours = req.body.utilizedHours;

  let module = new project_moduleSchema({
    modulename: modulename,
    project: project,
    estimatedHours: estimatedHours,
    startDate: startDate,
    endDate: endDate,
    utilizedHours: utilizedHours,
  });
  module.save(function (err, success) {
    
    if (err) {
      res.json({
        msg: "something went wrong",
        status: -1,
        data: err,
      });
    } else {
      res.json({
        msg: "module added",
        status: 200,
        data: success,
      });
    }
  });
};

///get by id
//  module.exports.getOneemodule = function (req, res) {
//    moduleModel
//      .findOne({ project: req.query.projectId })
//      .populate("project")
//      .exec(function (err, data) {
//        if (err) {
//          res.json({
//            msg: "data not found",
//            status: -1,
//            data: err,
//          });
//        } else {
//          res.json({
//            msg: "data retrived",
//            status: 200,
//            data: data,
//          });
//        }
//      });
//  };

//get all module data
module.exports.getAllmodule = function (req, res) {
    moduleModel.find().populate("project").exec(function (err, data) {
        if (err) {
          res.json({
            msg: "data not found",
            status: -1,
            data: err,
          });
        } else {
          res.json({
            msg: "data retrived",
            status: 200,
            data: data,
          });
        }
      });
  };

  module.exports.getoneModule = function (req, res) {
    let projectId = req.params.projectId;
    console.log(projectId);
    console.log("ppppppppppppppppplo");
    moduleModel
      .find({ project: projectId })
      .populate("project")
      .exec(function (err, data) {
        if (err) {
          res.json({
            msg: "data not found",
            status: -1,
            data: err,
          });
        } else {
          res.json({
            msg: "data retrived",
            status: 200,
            data: data,
          });
        }
      });
  };module.exports.getoneModule = function (req, res) {
  let projectId = req.params.projectId;
  console.log(projectId);
  console.log("ppppppppppppppppplo");
  moduleModel
    .find({ project: projectId })
    .populate("project")
    .exec(function (err, data) {
      if (err) {
        res.json({
          msg: "data not found",
          status: -1,
          data: err,
        });
      } else {
        res.json({
          msg: "data retrived",
          status: 200,
          data: data,
        });
      }
    });
};
module.exports.updatemodule = function (req, res) {
  let moduleid = req.body.moduleid;
  let modulename = req.body.modulename;
  let project = req.body.project;
  let estimatedHours = req.body.estimatedHours;
  let startDate = req.body.startDate;
  let endDate = req.body.endDate;
  let utilizedHours = req.body.utilizedHours;
  moduleModel.updateOne(
    { _id: moduleid },
    {
      modulename: modulename,
      project: project,
      estimatedHours: estimatedHours,
      startDate: startDate,
      endDate: endDate,
      utilizedHours: utilizedHours,
    },
    function (err, data) {
      if (err) {
        res.json({
          msg: "Something went wrong!!",
          status: -1,
          data: err,
        });
      } else {
        res.json({
          msg: "updated..",
          status: 200,
          data: req.body,
        });
      }
    }
  );
};
module.exports.deletemodule = function (req, res) {
  let moduleid = req.params.moduleid;
  moduleModel.deleteOne({ _id: moduleid }, function (err, success) {
    if (err) {
      res.json({
        msg: "not deleted",
        status: -1,
        data: err,
      });
    } else {
      res.json({
        msg: "data deleted",
        status: 200,
        data: success,
      });
    }
  });
};
