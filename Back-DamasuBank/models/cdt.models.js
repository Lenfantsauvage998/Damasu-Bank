import mongoose from 'mongoose';
// import userInfo from './userInfo.model.js'
// import calculate from './calculate.models.js'
const Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
const cdtSchema = new Schema({
  personalInfo: Schema.Types.Mixed,
  calculate: Schema.Types.Mixed,
 
});
// Exportamos el modelo para usarlo en otros ficheros
const cdt = mongoose.model('cdtInfo', cdtSchema);

export default cdt;