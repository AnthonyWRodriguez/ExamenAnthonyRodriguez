var ObjectID = require('mongodb').ObjectID;

function employeeModel(db){
  var lib = {};
  var empColl = db.collection('employees');
  lib.getEmployees = (handler)=>{
    empColl.find({}).toArray(handler);
    // implementar
    // obtener todos los documentos
    //return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesById = (id, handler) => {
    var query = {"_id": new ObjectID(id)};
    var projection = {"email":1, "phone":1, "name":1, "age":1, "_id":0};
    empColl.findOne(
      query,
      {"projection":projection},
      (err, doc)=>{
        if(err){
          return handler(err, null);
        }
        return handler(null, doc);
      }
    );
    // implementar
    // Obtener un Documento solo mostrar
    // email, phone, name y age
    //return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByCompany = (company, handler) => {
    var query = {"company": company};
    var projection = {"name":1, "email":1, "company":1, "_id":0};
    empColl.findOne(
      query,
      {"projection":projection},
      (err, doc)=>{
        if(err){
          return handler(err, null);
        }
        return handler(null, doc);
      }
    );
    // implementar
    // solo mostrar name, email, company
    //return handler(new Error("No Implementado"), null);
  }

  lib.getEmployeesByTag = (tag, handler) => {
    var query = {"tags": tag};
    var projection = {"name":1, "email":1, "tags":1, "_id":0};
    empColl.find(query,projection).toArray((err, doc)=>{
      if(err){
        console.log(err);
        return handler(err, null);
      }
      console.log(doc);
      return handler(null, doc);
    });
    //implementar
    // obtener todos los documentos que contenga 
    // al menos una vez el tag dentro del arreglo
    // tags
    // mostrar solo name, email, tags
    //return handler(new Error("No Implementado"), null);
  }

  lib.addEmployeeATag = ( tag, id, handler) => {
    //Implementar
    //Se requiere agregar a un documento un nuevo tag
    // $push
    return handler(new Error("No Implementado"), null);
  }

  lib.removeEmployee = (id, handler) => {
    //Implementar
    //Se requiere eliminar un documento de la colección
    return handler(new Error("No Implementado"), null);
  }

  lib.increaseAgeToAll = (ageDelta, handler) => {
    //Implementar
    //Se requiere modificar todos los documentos de la colección
    // incrementando age por la cantidad de ageDelta $inc
    return handler(new Error("No Implementado"), null);
  }
  return lib;
}

module.exports = employeeModel;
