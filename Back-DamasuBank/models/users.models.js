import mongoose from "mongoose"; 

const userSchema = new mongoose.Schema(
    {   
        name: {
            type: String,
            required: [true, "El nombre es obligatorio"]
        },
        age: {
            type: Number,
            required: [true, "La edad es obligatoria"]
        },
        id: {
            type: Number,
            required: [true, "El ID es obligatorio"],
            unique: true 
        },
        phoneNumber: {
            type: String,
            required: [true, "El número de teléfono es obligatorio"]
        },
        address: {
            type: String,
            required: [true, "La direccion en obligatoria"]
        },
        email: {
            type: String,
            required: [true, "El email es obligatorio"],
            unique: true 
        },
        password: {
            type: String,
            required: [true, "La contrasena es oblugatoria"]
        }
    }

  );

  const userDamasuSchema = mongoose.model('userDamasu', userSchema);

  export default userDamasuSchema;