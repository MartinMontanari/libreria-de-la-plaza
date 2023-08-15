import { Router } from 'express';
import CreateArticleAction from '../actions/articles/CreateArticleAction';
import ListAllArticlesAction from '../actions/articles/ListAllArticlesAction';


const router = Router();

router.post('/article', async (req, res) => {  
    const createArticleAction = new CreateArticleAction();
    await createArticleAction.execute(req, res);
});

router.get('/articles', async (req, res) => {  
    const listAllArticlesAction = new ListAllArticlesAction();
    await listAllArticlesAction.execute(req, res);
});

export default router;