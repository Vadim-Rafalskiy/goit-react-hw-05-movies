import { BrowserRouter } from 'react-router-dom';

import NavBar from './Pages/NavBar/NavBar';
import UserRoutes from './UserRoutes/UserRoutes';

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <UserRoutes />
      </BrowserRouter>
    </div>
  );
};
