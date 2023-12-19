import mongoose from 'mongoose';
const Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
const userInfoSchema = new Schema({
  name: String,
  lastName: String,
  email: String,
  department: String,
  city: String,
  phone: Number,
});
// Exportamos el modelo para usarlo en otros ficheros
const userInfo = mongoose.model('UserInfo', userInfoSchema);

export default userInfo;