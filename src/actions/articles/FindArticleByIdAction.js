import Article from '../../models/article';

export default class FindArticleByIdAction {
    async execute(req, res){
        try{
            const id = req.params.id;
            console.log("ARTICLE ID: ",id);
            const article = await Article.findById(id).lean();
            console.log("ARTICLE:",article);
            return res.status(200).json(article);
        } catch(error){
            console.error("Ocurrió un error al buscar el artículo:", error);
            return res.status(500).json({ message: "Ocurrió un error al buscar el artículo"})
        }
        
    }
}