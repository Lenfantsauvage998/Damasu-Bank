import userRecordsDamasuSchema from '../models/history.models.js'

/*-----------------------------------------------------*/

const usuarioRecordsGet = async (req,res) =>{
    try{
        const info = await userRecordsDamasuSchema.find()
        res.status(200).send(info)
    }catch(err){
        console.error( err )
        res.status(500).send({ error: 'Error en el get' })
    }
}

      /*----------------------------------------*/

const usuarioRecordsGetSpecific = async (req,res) =>{
    try{
        const data = req.user
        const user = await userRecordsDamasuSchema.findOne({ "id": data.id})
        const infoDescomprimed = user.records
        const datafixed = [...infoDescomprimed].sort((a, b) => b.id - a.id );
        res.status(200).send(datafixed)
    }catch(err){
        console.error(err)
    }
}

/*--------------------------------------------------------*/

const usuarioRecordPostRegistro = async (req,res) => {
    try{
        const data = req.body 
        const result = await userRecordsDamasuSchema.create(data)
        res.status(200).send(result)
    }catch(err){
        console.error( err )
        res.status(500).send(err)
    }
}

/*--------------------------------------------------------*/

const usuarioRecordDelete = async (req,res) =>{ 
    try{
        const idforDelete = req.params.id
        await userRecordsDamasuSchema.findByIdAndDelete(idforDelete)
        res.status(200).send("Eliminado exitosamente")
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: 'Error al eliminar los usuarios' })
    }
    
}

/*-------------------------------------------------------*/

export {usuarioRecordsGet, usuarioRecordsGetSpecific ,usuarioRecordPostRegistro, usuarioRecordDelete}

 