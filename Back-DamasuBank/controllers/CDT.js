import userCDTDamasuSchema from '../models/CDT.models.js'
import userCapitalDamasuSchema from '../models/balance.models.js'
import userRecordsDamasuSchema from '../models/history.models.js'
import userDamasuSchema from '../models/users.models.js'

/*---------------------------------------------------------*/

const usuarioCDTGet = async (req,res) =>{
    try{
        const info = await userCDTDamasuSchema.find()
        res.status(200).send(info)
    }catch(err){
        console.error( err )
        res.status(500).send({ error: 'Error en el get' })
    }
}

    /*-----------------------------------------------*/

const usuarioCDTGetSpecific = async (req,res) =>{
    try{
        const data = req.user
        const user = await userCDTDamasuSchema.findOne({ "id": data.id})
        res.status(200).send([user])
    }catch(err){
        console.error(err)
    }
}

/*-----------------------------------------------------------*/

const usuarioCDTRegistro = async (req,res) => {
    try{
        const currentDate = new Date();

        // Obtener información de la fecha y la hora
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();

        // Formatear la fecha y la hora según tus necesidades
        const formattedDateTime = `${day}/${month}/${year}  --  ${hours}:${minutes}:${seconds}`;


        /*---------------------------------------------------------*/
        
        const data = req.user /*- La persona que esta logueada */ 
        const info = req.body /*-- La cedula de la persona que se va a transferir ---*/


        /*---------------------------------------------------------*/

        const fromMongo = await userCapitalDamasuSchema.findOne({ id : data.id})

        const moneyFromMongo = fromMongo.patrimony

        const result1 = (parseInt(moneyFromMongo) - parseInt(info.investedMoney))

        await userCapitalDamasuSchema.updateOne({ "id": data.id }, { $set: { "patrimony": result1 }}) 

        /*-----------------------------------------------------------*/

                const lookingTheGuy = await userDamasuSchema.findOne({ id : info.id})

                const name = (lookingTheGuy.name)
        
                const previusInfo = await userRecordsDamasuSchema.findOne({id:data.id})
        
                const updatedInfo = previusInfo.records
        
                const decompressedObjects  = [];
        
                /*---------------------------------------------------------*/
        
        
                for (let i = 0; i <= updatedInfo.length; i++) {
                    const decompressedObject  = updatedInfo[i];
        
                        if(!decompressedObject == 0){
                            decompressedObjects.push(decompressedObject);
                        }
                   
        
                        if (i === updatedInfo.length) {
        
                            const finalinfo = {
                                "name": "CDT-DamasuBank" , "date" : formattedDateTime , "amount" :  "-" + info.investedMoney, "id": i,
                            }  
                  
                            decompressedObjects.push(finalinfo)
                            
                            }
        
                  }
        
                /*----------------------------------------------------------*/      
        
                await userRecordsDamasuSchema.updateOne({ "id": data.id }, { $set: { "records": decompressedObjects}})
        
                /*-----------------------------------------------------------*/
             
             const result = await userCDTDamasuSchema.create(info)

        /*----------------------------------------------------------*/
    
        res.status(200).send(result)
    }catch(err){
        console.error( err )
        res.status(500).send({ error: 'Revisa los campos' })
    }
}

/*-------------------------------------------------------------------------*/

const usuarioCapitalUpdatePSE = async (req, res) =>{
    try{

        const currentDate = new Date();

        // Obtener información de la fecha y la hora
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        const hours = currentDate.getHours();
        const minutes = currentDate.getMinutes();
        const seconds = currentDate.getSeconds();

        // Formatear la fecha y la hora según tus necesidades
        const formattedDateTime = `${day}/${month}/${year}  --  ${hours}:${minutes}:${seconds}`;


        /*---------------------------------------------------------*/
        
        // const data = req.user /*- La persona que esta logueada */ 
        const info = req.body /*-- La cedula de la persona que se va a transferir ---*/


        /*-----------------------------------------------------------*/


        // const fromMongo = await userCapitalDamasuSchema.findOne({ id : data.id})

        // const moneyFromMongo = fromMongo.patrimony

        const fromMongo2 = await userCapitalDamasuSchema.findOne({ id : info.id})

        const moneyFromMongo2 = fromMongo2.patrimony


        /*-----------------------------------------------------------*/


        // const result1 = (parseInt(moneyFromMongo) - parseInt(info.request)) 

        // await userCapitalDamasuSchema.updateOne({ "id": data.id }, { $set: { "patrimony": result1 }}) 

        const result2 = (parseInt(moneyFromMongo2) + parseInt(info.request)) 

        await userCapitalDamasuSchema.updateOne({ "id": info.id }, { $set: { "patrimony": result2 }})


        /*-----------------------------------------------------------*/

        // const lookingTheGuy = await userDamasuSchema.findOne({ id : info.id})

        // const name = (lookingTheGuy.name)

        // const previusInfo = await userRecordsDamasuSchema.findOne({id:data.id})

        // const updatedInfo = previusInfo.records

        // const decompressedObjects  = [];

        // /*---------------------------------------------------------*/


        // for (let i = 0; i <= updatedInfo.length; i++) {
        //     const decompressedObject  = updatedInfo[i];

        //         if(!decompressedObject == 0){
        //             decompressedObjects.push(decompressedObject);
        //         }
           

        //         if (i === updatedInfo.length) {

        //             const finalinfo = {
        //                 "name": name , "date" : formattedDateTime , "amount" :  "-" + info.request, "id": i,
        //             }  
          
        //             decompressedObjects.push(finalinfo)
                    
        //             }

        //   }

        // /*----------------------------------------------------------*/      

        // await userRecordsDamasuSchema.updateOne({ "id": data.id }, { $set: { "records": decompressedObjects}})

        /*------------------------------------------------------------*/

        // const lookingTheGuy2 = await userDamasuSchema.findOne({ id : data.id})

        // const name2 = (lookingTheGuy2.name)

        const previusInfo2 = await userRecordsDamasuSchema.findOne({id:info.id})

        const updatedInfo2 = previusInfo2.records

        const decompressedObjects2  = [];


        /*---------------------------------------------------------*/


        for (let i = 0; i <= updatedInfo2.length; i++) {
            const decompressedObject2  = updatedInfo2[i];

                if(!decompressedObject2 == 0){
                    decompressedObjects2.push(decompressedObject2);
                }
           

                if (i === updatedInfo2.length) {

                    const finalinfo1 = {
                        "name": "PSE-DamasuBank" , "date" : formattedDateTime, "amount" : "+" + info.request, "id": i,
                    }  
          
                    decompressedObjects2.push(finalinfo1)
                    
                    }

          }

        /*----------------------------------------------------------*/    

        // console.log(decompressedObjects2)
        await userRecordsDamasuSchema.updateOne({ "id": info.id }, { $set: { "records": decompressedObjects2}})
        

        res.status(200).send({ "msj": "Transaccion exitosa"})
    }catch(err){
        console.error(err)
        res.status(500).json({ error: 'Error en la transaccion' })
    }
}

/*--------------------------------------------------------*/

const usuarioCDTDelete = async (req,res) =>{ 
    try{
        const idforDelete = req.params.id
        await userCDTDamasuSchema.findByIdAndDelete(idforDelete)
        res.status(200).send("Eliminado exitosamente")
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: 'Error al eliminar los usuarios' })
    }
    
}

export { usuarioCDTGet , usuarioCDTGetSpecific, usuarioCDTRegistro , usuarioCapitalUpdatePSE , usuarioCDTDelete }