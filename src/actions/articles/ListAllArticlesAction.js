import Article from '../../models/article';

export default class ListAllArticlesAction {
    async execute(req, res){
        try{
            const articles = await Article.find().lean()
            console.log("ARTICLES:",articles);
            return res.status(200).json(articles);
        } catch(error){
            console.error("Ocurrió un error al buscar los artículos:", error);
            return res.status(500).json({ message: "Ocurrió un error al buscar los artículos"})
        }
        
    }
}