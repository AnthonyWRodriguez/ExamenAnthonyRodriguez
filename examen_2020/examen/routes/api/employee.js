var express = require('express');
var router = express.Router();

function initEmployee(db) {
  var empModel = require('./employeeModel')(db);

  //rutas a implementar
  // metodo     ruta                     body
  /*
      GET       /all
      GET       /byid/:id
      GET       /bycompany/:company
      GET       /bytag/:tag
      POST      /addtag/:id              tag
      DELETE    /delete/:id
      POST      /makeolder               age
   */

  router.get('/all', (req, res, next) => {
    empModel.getEmployees( (err, docs)=>{
      return res.status(200).json(docs);
    });
  });// all

  router.get('/byid/:id', (req, res)=>{
    var id = req.params.id;
    empModel.getEmployeesById(id, (err, doc)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"error"});
      }
      return res.status(200).json(doc);
    });
  });

  router.get('/bycompany/:company', (req, res)=>{
    var comp = req.params.company;
    empModel.getEmployeesByCompany(comp, (err, doc)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"error"});
      }
      return res.status(200).json(doc);
    });
  });

  router.get('/bytag/:tag',(req, res)=>{
    var tags = req.params.tag;
    empModel.getEmployeesByTag(tags, (err, doc)=>{
      if(err){
        console.log(err);
        return res.status(500).json({"error":"error"});
      }
      return res.status(200).json(doc);
    });
  });

  
  return router;
}

module.exports = initEmployee;
