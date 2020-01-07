import Koa from 'koa';
import KoaRouter from 'koa-router';
import bodyParser from 'koa-bodyparser';
import { config } from 'dotenv';
import Routes from './routes';

config();

const app = new Koa();
const router = new KoaRouter({
	prefix: '/api'
});

Routes.forEach((route) => {
	router[route.method](route.path, route.action);
});

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

export default app;
