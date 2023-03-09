import { BrowserRouter } from 'react-router-dom';

import NavBar from './Pages/NavBar/NavBar';
import UserRoutes from './UserRoutes/UserRoutes';

import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.section}>
      <BrowserRouter>
        <NavBar />
        <UserRoutes />
      </BrowserRouter>
    </div>
  );
};
