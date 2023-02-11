import { createBrowserRouter, Navigate } from 'react-router-dom';
import { gameLoader } from '../common/config/loader';
import { Error, Notfound } from '../presentation/error/index';
import Game from '../presentation/screens/Game';

// import { gameLoader } from '~/features/Game/loader';
// import { gameDevLoader } from '~/features/Game/loader';

// import Game from '~/features/Game/components/Game/Game';
// import Error from './features/Error/components/Error/Error';
// import Notfound from './features/Error/components/Notfound/Notfound';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to='/game' replace />,
    errorElement: <Error />
  },
  {
    path: '/game',
    loader: gameLoader,
    element: <Game />,
    errorElement: <Error />
  },
  {
    path: '/dev',
    loader: gameLoader,
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
