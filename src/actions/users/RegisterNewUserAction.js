import User from '../../models/user';
import bcrypt from 'bcrypt';

export default class RegisterNewUserAction {
    async execute(req, res){
        try{
            const body = req.body;
            console.log("BODY:",body);
            const user = new User();
            const password = await bcrypt.hash(body.password, 10);
            user.username = body.username;
            user.email = body.email;                                
            user.password = password;
            console.log("USER:",user);
            await user.save();
            return res.status(201).json({ message: "Usuario registrado correctamente."});
        } catch(error){
            console.error("Ocurrió un error al registrar el usuario:", error);
            return res.status(422).json({ message: "Error al registar el usuario"})
        }
        
    }
}