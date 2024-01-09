import mongoose from "mongoose"; 

const userSchema = new mongoose.Schema(
    {   
        name: {
            type: String,
            requird:true
        },
        id : {
            type: Number,
            require: true,
            unique: true
        
        },
        BeginDate: {
            type: String,
            required: true
        },
        PeriodMonths: {
            type: String,
            required: true
        },
        investedMoney:{
            type: Number,
            default: 0
        },
        percentage:{
            type: Number,
            default: 14.56
        }
    }

  );

  const userCDTDamasuSchema = mongoose.model('usercdtaccount', userSchema);

  export default userCDTDamasuSchema;