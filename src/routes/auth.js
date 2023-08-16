import { Router } from 'express';
import RegisterNewUserAction from '../actions/users/RegisterNewUserAction';
import LoginUserAction from '../actions/users/LoginUserAction';
import LogOutUserAction from '../actions/users/LogOutUserAction';

const router = Router();

router.post('/register', new RegisterNewUserAction().execute);

router.post('/login', new LoginUserAction().execute);

router.post('/logout', new LogOutUserAction().execute);

export default router;