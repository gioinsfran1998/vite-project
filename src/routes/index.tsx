import { createBrowserRouter } from 'react-router-dom';
import { gameLoader } from '../common/config/loader';
import { Error, Notfound } from '../presentation/error/index';
import Game from '../presentation/screens/Game';

const routes = createBrowserRouter([
  {
    path: '/',
    loader: gameLoader,
    index: true,
    element: <Game />,
    errorElement: <Error />
  },
  {
    path: '*',
    index: true,
    element: <Notfound />
  }
]);

export default routes;
