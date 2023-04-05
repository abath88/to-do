import Container from '../Container/Container'
import { Link } from 'react-router-dom';

import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.space}>
          <Link className={`${styles.link} ${styles.linkIcon}`} to="/"><span className={`${styles.icon} fa fa-tasks`} /></Link>
          <ul className={styles.menu}>
            <li className={styles.menuItem}><Link className={styles.link} to="/">Home</Link></li>
            <li className={styles.menuItem}><Link className={styles.link} to="/favorite">Favorite</Link></li>
            <li className={styles.menuItem}><Link className={styles.link} to="/about">About</Link></li>
          </ul>
        </div>
      </Container>
    </nav>
  )
}

export default NavBar;