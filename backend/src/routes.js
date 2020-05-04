import { Router } from 'express';

import User from './app/models/User';

const routes = new Router();

routes.get('/', async (req, res) => {
    const user = await User.create({
        name: 'matheus',
        email: 'math@hotmail.com',
        password_hash: '123321',
        provider: false,
    });
    return res.json(user);
});

export default routes;
