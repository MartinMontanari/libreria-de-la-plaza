import Article from '../../models/article';

export default class CreateArticleAction {
    async execute(req, res){
        try{
            const body = req.body;
            console.log("BODY:",body);
            const article = new Article();
            article.id = body.id;
            article.name = body.name;
            article.brand = body.brand;
            article.price = body.price;
            console.log("ARTICLE:",article);
            await article.save();
            return res.status(201).json({ message: "Articulo guardado correctamente."});
        } catch(error){
            console.error("Ocurrió un error al guardar el artículo", error);
            return res.status(422).json({ message: "Error al guardar el artículo"})
        }
        
    }
}