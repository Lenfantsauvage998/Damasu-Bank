import mongoose from "mongoose"; 

const userSchema = new mongoose.Schema(
    {   
        id: {
            type: String,
            required: true,
            unique: true 
        },
        patrimony: {
            type: Number,
            default: 0,
        },
        investedMoney : {
            type: Number,
            default: 0,
        }
    }

  );

  const userCapitalDamasuSchema = mongoose.model('usercapital', userSchema);

  export default userCapitalDamasuSchema;