import User from '../../models/user';
import Session from '../../models/session';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class LoginUserAction {
    async execute(req, res){
        try{
            const body = req.body;
            console.log("EMAIL:",body.email);
            const email = body.email;
            const userFound = await User.findOne({email});
            const userFoundId = userFound._id;
            const session = await Session.findOne({userId:userFoundId}).exec();
            if(session.userId == userFoundId){
                return res.status(401).set('Authorization', session.token).json({ message: "Ya existe una sesión activa."});
            }
            if(!userFound){
                return res.status(404).json({ message: "Usuario no encontrado."});
            };
            const isMatch = await bcrypt.compare(body.password, userFound.password);
            if(!isMatch){
                return res.status(401).json({ message: "Credenciales incorrectas."});
            }
            const token = await jwt.sign(
                { id: userFoundId},
                process.env.JWT_SECRET_KEY,
                {
                    expiresIn: "1d"
                });
            const newSession = new Session();
            newSession.userId = userFoundId;
            newSession.token = token;
            await newSession.save()
            return res.status(200).set('Authorization', token).json({ token: token});
        } catch(error){
            console.error("Ocurrió un error al loguear el usuario:", error);
            return res.status(500).json({ message: "Error al loguear el usuario"})
        }
    }
}