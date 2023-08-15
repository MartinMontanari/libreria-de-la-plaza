import { Router } from 'express';
import CreateArticleAction from '../actions/articles/CreateArticleAction';

const router = Router();

router.post('/article', async (req, res) => {  
    const createArticleAction = new CreateArticleAction();
    await createArticleAction.execute(req, res);
});

export default router;