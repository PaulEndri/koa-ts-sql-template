import { Context } from 'koa';

class UserController {
	public async get(context: Context) {
		context.body = 'Okedokes';
	}
}

export default UserController;
