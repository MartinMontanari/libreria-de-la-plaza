import Session from '../../models/session';


export default class LogOutUserAction {
    async execute(req, res){
        try{
            const headers = req.headers;
            const token = headers.authorization;
            const sessionFound = await Session.findOne({token:token}).exec();
            if(!sessionFound || sessionFound === []){
                return res.status(404).json({ message: "Sesión no encontrada."});
            };
            await Session.deleteOne({token});
            return res.status(200).json({ message: "Sesión eliminada."});
        } catch(error){
            console.error("Ocurrió un error al desloguear el usuario:", error);
            return res.status(500).json({ message: "Error al desloguear el usuario"})
        }
        
    }
}