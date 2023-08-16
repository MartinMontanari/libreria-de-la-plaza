import { Router } from 'express';
import RegisterNewUserAction from '../actions/users/RegisterNewUserAction';
import LoginUserAction from '../actions/users/LoginUserAction';

const router = Router();

router.post('/register', new RegisterNewUserAction().execute);

router.post('/login', new LoginUserAction().execute);

export default router;