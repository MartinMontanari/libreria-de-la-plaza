import Article from '../../models/article';

export default class UpdateArticleAction {
    async execute(req, res){
        try{
            const id = req.params.id;
            const body = req.body;
            console.log("ARTICLE ID: ",id);
            console.log("ARTICLE BODY: ",body);
            const article = await Article.findByIdAndUpdate(id,body);
            console.log(article);
            return res.status(200).json({ message: "Articulo actualizado correctamente"});
        } catch(error){
            console.error("Ocurrió un error al actualizar el artículo:", error);
            return res.status(500).json({ message: "Ocurrió un error al actualizar el artículo"})
        }
        
    }
}