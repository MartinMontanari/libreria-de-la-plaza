import { Router } from 'express';
import CreateArticleAction from '../actions/articles/CreateArticleAction';
import ListAllArticlesAction from '../actions/articles/ListAllArticlesAction';
import UpdateArticleAction from '../actions/articles/UpdateArticleAction';
import FindArticleByIdAction from '../actions/articles/FindArticleByIdAction';
import DeleteArticleAction from '../actions/articles/DeleteArticleAction';

const router = Router();

router.post('/article', new CreateArticleAction().execute);

router.get('/articles', new ListAllArticlesAction().execute);

router.get('/article/:id', new FindArticleByIdAction().execute);

router.put('/article/:id', new UpdateArticleAction().execute);

router.delete('/article/:id', new DeleteArticleAction().execute);

export default router;