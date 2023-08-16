import Article from '../../models/article';

export default class DeleteArticleAction {
    async execute(req, res){
        try{
            const id = req.params.id;
            console.log("ARTICLE ID: ",id);
            await Article.findByIdAndDelete(id);
            return res.status(200).json({ message: "Aticulo eliminado correctamente"});
        } catch(error){
            console.error("Ocurrió un error al buscar el artículo:", error);
            return res.status(500).json({ message: "Ocurrió un error al buscar el artículo"})
        }
        
    }
}