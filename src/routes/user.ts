import IRoute from '../interfaces/route';
import UserController from '../controllers/user';

const UserRoutes = (controller: UserController): IRoute[] => [
	{ method: 'get', path: '/user', action: controller.get }
];

export default UserRoutes;
