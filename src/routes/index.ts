import UserRoutes from './user';
import UserController from '../controllers/user';
import IRoute from '../interfaces/route';

const userController = new UserController();

const Routes: IRoute[] = [ ...UserRoutes(userController) ];

export default Routes;
