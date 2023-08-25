import session from '../../models/session';
import User from '../../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class RegisterNewUserAction {
    async execute(req, res){
        try{
            const user = new User();
            const { username, email, password} = req.body;
            const foundUser = await User.findOne({email});
            if(foundUser){
                return res.status(400).json({message: ["El usuario ya se encuentra registrado."]});
            }
           
            const cryptedPassword = await bcrypt.hash(password, 10);
            user.username = username;
            user.email = email;                                
            user.password = cryptedPassword;
            const userCreated = await user.save();
            const token = await jwt.sign(
                { id: userCreated._id},
                process.env.JWT_SECRET_KEY,
                {
                    expiresIn: "1d"
                });
            const newSession = new session();
            newSession.userId = userCreated._id;
            newSession.token = token;
            await newSession.save();
            return res.status(201).json({ message: "Usuario registrado correctamente."});
        } catch(error){
            console.error("Ocurrió un error al registrar el usuario:", error);
            return res.status(422).json({ message: "Error al registar el usuario"})
        }
        
    }
}