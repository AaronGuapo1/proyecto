  const mongoose = require('mongoose');
  
  //unique:true, require:true

  const calificaciones = new mongoose.Schema(
     {
  student_id:{type:Number,required:true},
  scores:{type:Array,required:true},
  class_id:{type:Number,required:true},
  promedio:{type:Number,required:true},
    }
  );
  const grades = new mongoose.model('grades',calificaciones);

  module.exports ={grades}