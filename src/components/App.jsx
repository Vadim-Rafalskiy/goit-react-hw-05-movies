import NavBar from './Pages/NavBar/NavBar';
import UserRoutes from './UserRoutes/UserRoutes';

import styles from './App.module.scss';

export const App = () => {
  return (
    <div className={styles.section}>
      <NavBar />
      <UserRoutes />
    </div>
  );
};
