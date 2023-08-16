import User from '../../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export default class LoginUserAction {
    async execute(req, res){
        try{
            const body = req.body;
            console.log("EMAIL:",body.email);
            const email = body.email;
            const userFound = await User.findOne({email});
            if(!userFound){
                return res.status(404).json({ message: "Usuario no encontrado."});
            };
            const isMatch = await bcrypt.compare(body.password, userFound.password);
            if(!isMatch){
                return res.status(401).json({ message: "Credenciales incorrectas."});
            }
            await jwt.sign(
                { id: userFound._id},
                process.env.JWT_SECRET_KEY,
                {
                    expiresIn: "1d"
                },
                (error, token) => {
                    if(error){
                        console.error("Ocurrió un error al generar el token: ", error)
                    }
                    return res.status(200).json({ token: token});
                }
                )
        } catch(error){
            console.error("Ocurrió un error al loguear el usuario:", error);
            return res.status(500).json({ message: "Error al loguearr el usuario"})
        }
        
    }
}