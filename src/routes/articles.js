import { Router } from 'express';
import CreateArticleAction from '../actions/articles/CreateArticleAction';
import ListAllArticlesAction from '../actions/articles/ListAllArticlesAction';
import UpdateArticleAction from '../actions/articles/UpdateArticleAction';
import FindArticleByIdAction from '../actions/articles/FindArticleByIdAction';


const router = Router();

router.post('/article', async (req, res) => {  
    const createArticleAction = new CreateArticleAction();
    await createArticleAction.execute(req, res);
});

router.get('/articles', async (req, res) => {  
    const listAllArticlesAction = new ListAllArticlesAction();
    await listAllArticlesAction.execute(req, res);
});

router.get('/article/:id', async (req, res) => {  
    const findArticleByIdAction = new FindArticleByIdAction();
    await findArticleByIdAction.execute(req, res);
});


router.put('/article/:id', async (req, res) => {  
    const updateArticleAction = new UpdateArticleAction();
    await updateArticleAction.execute(req, res);
});


export default router;