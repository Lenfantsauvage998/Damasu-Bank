import userDamasuSchema from '../models/users.models.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const usuarioGet = async (req,res) =>{
    
    let info = req.query
    try{

        let skip = parseInt(info.page) || 1
        const limit = parseInt(info.page_size) || 10

        const resolution = (skip) => {if (skip ==  1){
            skip = 0
            return skip
        }else{
            return skip - 1
        }}

       
        const skipsolved = resolution(skip) 

        const usersGet = await userDamasuSchema.aggregate(
            [
                {
                    $skip : (skipsolved * limit)
                },
                {
                    $limit : limit
                }
            ]
        )

        const otherStuff = { }

        const completeData = {
            otherStuff,
            usersGet
        }

    res.status(200).json(completeData)  

    }catch (err){
        console.error(err);
        res.status(500).json({ error: 'Error al obtener usuarios' })
    }
}


const usuarioPost =  async (req,res) =>{ 

    try{
        const data = req.body

        data.password = bcrypt.hashSync(data.password , parseInt(process.env.MATSER_KEY))

    const newuser = new userDamasuSchema({
        name : data.name , 
        age : data.age, 
        id : data.id,
        phoneNumber : data.phoneNumber, 
        address : data.address,
        email: data.email, 
        password: data.password
    })

    await newuser.save()
    
    let token = jwt.sign({ _id: newuser._id },process.env.JWT_KEY)

    const userData= {
        token,
        newuser
    }

    res.status(200).send(userData)
    } catch (err){
        console.error(err);
        res.status(500).json({ error: 'Error al poner los usuarios' })
    }
    
}


    const usuarioPostLogIn = async (req, res) =>  {
        try{
            const data = req.body
            let token = jwt.sign({ _id: data._id }, process.env.JWT_KEY)

        res.status(200).send( token + " "  + "Has ingresado exitosamente")

        }catch(err){
            console.error(err);
            res.status(500).json({ error: 'Error al registrarse' })
        }
    }


    const usuarioDelete = async (req,res) =>{ 
    try{
        const idforDelete = req.params.id
        await userDamasuSchema.findByIdAndDelete(idforDelete)
        res.status(200).send("Eliminado exitosamente")
    } catch(err) {
        console.error(err);
        res.status(500).json({ error: 'Error al eliminar los usuarios' })
    }
    
}


    

     export {usuarioGet,usuarioPost,usuarioDelete,usuarioPostLogIn }

