import mongoose from "mongoose";
const Schema = mongoose.Schema;
// Creamos el objeto del esquema y sus atributos
const calculateSchema = new Schema({
  amount: Number,
  time: Number,
  cost: Number,
});
// Exportamos el modelo para usarlo en otros ficheros
const calculate = mongoose.model("Calculate", calculateSchema);

export default calculate;
