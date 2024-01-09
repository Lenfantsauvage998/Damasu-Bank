import mongoose from "mongoose"; 

const userSchema = new mongoose.Schema(
    {   
        id: {
            type: Number,
            required: true,
            unique: true 
        },
        records:{
            type: Array,
            default: []
        }
    }

  );

  const userRecordsDamasuSchema = mongoose.model('userecords', userSchema);

  export default userRecordsDamasuSchema;